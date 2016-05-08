<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sustine ADRA</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="css/login.css">
</head>
<body id="app-layout">
<div class="top-bar">
    <div class="top-bar-title">
        <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
          <button class="menu-icon dark" type="button" data-toggle></button>
        </span>
        <strong>Sustine ADRA</strong>
    </div>
    <div id="responsive-menu">
        <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
                <li>
                    <a href="{{ url('/') }}">
                        Support ADRA
                    </a>
                </li>
                @if (Auth::guest())
                <li><a href="{{ url('/login') }}">Login</a></li>
                <li><a href="{{ url('/register') }}">Register</a></li>
                @else
                <li>
                    <a href="#">
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>
                </li>
                <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                @endif
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="menu">
                <li><input type="search" placeholder="Search"></li>
                <li>
                    <button type="button" class="button">Search</button>
                </li>
            </ul>
        </div>
    </div>
</div>

<!--<div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle></button>
    <div class="title-bar-title">Menu</div>
</div>

<div class="top-bar" id="example-menu">
    <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">Site Title</li>
            <li>
                <a href="#">One</a>
                <ul class="menu vertical">
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
        </ul>
    </div>
    <div class="top-bar-right">
        <ul class="menu">
            <li><input type="search" placeholder="Search"></li>
            <li><button type="button" class="button">Search</button></li>
        </ul>
    </div>
</div>-->

@yield('content')

<!-- JavaScripts -->
<script src="js/all.js"></script>
<script>
    $(document).foundation();
</script>
</body>
</html>
