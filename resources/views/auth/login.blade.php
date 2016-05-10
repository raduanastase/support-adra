@extends('layouts.app')

@section('content')

<div class="row">
    <div class="medium-6 medium-centered large-4 large-centered columns text-center">
        <img class="logo" src="img/adra.png">
    </div>
</div>

<div class="row">
    <div class="medium-6 medium-centered large-4 large-centered columns">
        <form class="register-login-form" method="POST" action="{{ url('/login') }}">
            {!! csrf_field() !!}

            <div class="row">
                <label>E-mail {{ $errors->has('email') ? ' has-error' : '' }}</label>
                <input type="email" placeholder="email@exemplu.ro" name="email" value="{{ old('email') }}">

                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>
            <div class="row">
                <label>Parola {{ $errors->has('password') ? ' has-error' : '' }}</label>

                <input type="password" placeholder="parola" name="password">

                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
            <div class="row">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember"> Tine-ma minte
                    </label>
                </div>
            </div>
            <div class="row">
                <input type="submit" class="button expanded" value="Intră în cont">
            </div>
            <div class="row text-center">
                <a href="{{ url('/password/reset') }}">Ai uitat parola?</a>
            </div>
        </form>

    </div>
</div>

@endsection
