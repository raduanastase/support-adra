<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>Sustine ADRA</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="css/app.css">
    <script>
        window.pageData = {
            userId: {{ $userId or 'undefined' }},
            counties: <?php echo $counties?>
        };
        console.log(window.pageData);
    </script>
</head>
<body id="app-layout">

<div class="loading-cover"><img src="img/loading.gif"></div>

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
                        Sustine ADRA
                    </a>
                </li>
                @if (Auth::guest())
                <li><a href="{{ url('/login') }}">Login</a></li>
                <li><a href="{{ url('/register') }}">Inregistrare</a></li>
                @else
                <li>
                    <a href="#">
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>
                </li>
                <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Iesire din cont</a></li>
                @endif
                <li><button class="button add-case-button">Adaugă caz</button></li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="menu">
                <li><input type="search" placeholder="Cauta"></li>
                <li>
                    <button type="button" class="button">Cauta</button>
                </li>
            </ul>
        </div>
    </div>
</div>

@yield('content')

<!-- JavaScripts -->
<script src="js/all.js"></script>
<script src="js/index.js"></script>
</body>
</html>
