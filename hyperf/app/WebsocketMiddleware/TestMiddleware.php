<?php


namespace App\WebsocketMiddleware;


class TestMiddleware extends AbstractMiddleware
{

    public function handle(array $routInfo, $next)
    {
        return $next($routInfo);
    }
}