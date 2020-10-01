import React from "react";
// @ts-ignore
import {Editor as DraftEditor, EditorState, RichUtils, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './index.less';
import {BaseState, ToolNameState} from "@/components/Editor/Type";
import FontsizeRender from "@/components/Editor/components/FontsizeRender/indcex";
import {stylesMap, toolHeaderConfig, getStylesByType} from './Config';
import ColorRender from './components/ColorRender';
import {setStyle, hasStyleType} from './Server';
import BoldRender from './components/BoldRender'
import ItalicRender from './components/ItalicRender';

class Editor extends React.Component<any, any>
{
  state: BaseState;
  editor: any;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fontsize: toolHeaderConfig.fontSize,
      color: toolHeaderConfig.color,
      backColor: toolHeaderConfig.backColor,
      fontBold: toolHeaderConfig.fontBold,
      italic: toolHeaderConfig.italic
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onChange = this.onChange.bind(this);
    this._toggleItalic = this._toggleItalic.bind(this);
  }

  private onChange(editorState: any)
  {
    const styles = editorState.getCurrentInlineStyle();
    // 跟踪字号
    hasStyleType(styles, 'FONT_SIZE').then((fontsize) => {
      this.setState({fontsize: parseInt(fontsize) })
    }).catch((e) => {this.setState({fontsize: toolHeaderConfig.fontSize})});
    // 跟踪字体颜色
    hasStyleType(styles, 'FONT_COLOR').then((color) => {
      this.setState({color})
    }).catch((e) => {
      this.setState({ color: toolHeaderConfig.color });
    });
    // 跟踪字体背景
    hasStyleType(styles, 'FONT_BACK').then((backColor) => {
      this.setState({backColor})
    }).catch((e) => {this.setState({ backColor: toolHeaderConfig.backColor })});
    //跟踪加粗
    styles.has('FONT_BOLD') ? this.setState({fontBold: 'FONT_BOLD'}) : this.setState({fontBold: ''});
    //斜体
    styles.has('ITALIC') ? this.setState({ italic: 'ITALIC'}) : this.setState({italic: ''});
    this.setState({editorState})
  };


  handleKeyCommand(command: any, editorState: any)
 {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  // 修改字号
  private _toggleFontsize(fontsize: number): void
  {
    const style = 'FONT_SIZE_' + fontsize;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({'fontsize': fontsize});
      this.onChange(nextEditorState);
    }
  }

  // 字体颜色
  private _toggleFontColor(color: string): void
  {
    const style = 'FONT_COLOR_' + color;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({'color':  color});
      this.onChange(nextEditorState);
    }
  }

  // 字体背景
  private _toggleFontBack(backColor: string): void
  {
    const style = 'FONT_BACK_' + backColor;
    const nextEditorState = setStyle(this.state.editorState, style);
    if (nextEditorState) {
      this.setState({ backColor });
      this.onChange(nextEditorState);
    }
  }

  // 加粗
  private _toggleBold(): void
  {
    const fontBold: ToolNameState = 'FONT_BOLD';
    const nextEditorState = setStyle(this.state.editorState, fontBold);
    if (nextEditorState) {
      this.onChange(nextEditorState);
    }
  }

  // 斜体
 private _toggleItalic(): void
 {
   const fontBold: ToolNameState = 'ITALIC';
   const nextEditorState = setStyle(this.state.editorState, fontBold);
   console.log(nextEditorState.getCurrentInlineStyle().toString());
   if (nextEditorState) {
     this.onChange(nextEditorState);
   }
 }

  render() {
    return (
      <div
        className={styles.editorWrapper}
      >
        <div className={styles.toolsWrapper}>
          <FontsizeRender fontsize={this.state.fontsize}  onChange={this._toggleFontsize.bind(this)} />
          <ColorRender
            stylesMap={stylesMap}
            backColor={this.state.backColor}
            color={this.state.color}
            onChangeBackColor={this._toggleFontBack.bind(this)}
            onChangeColor={this._toggleFontColor.bind(this)}
          />
          <BoldRender
            fontBold={this.state.fontBold}
            onChange={() => this._toggleBold()}
          />
          <ItalicRender
            onChange={this._toggleItalic}
            italic={this.state.italic}
          />
        </div>
        <DraftEditor
          customStyleMap={stylesMap}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          ref={(ref: any) => this.editor = ref }
        />
      </div>
    );
  }
}

export default Editor;
