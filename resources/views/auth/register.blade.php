@extends('layouts.app')

@section('content')
<div class="row">
    <div class="medium-6 medium-centered large-4 large-centered columns text-center">
        <img class="logo" src="img/adra.png">
    </div>
</div>

<div class="row">
    <div class="medium-6 medium-centered large-4 large-centered columns">
        <form class="register-login-form" method="POST" action="{{ url('/register') }}">
            {!! csrf_field() !!}

            <div class="row">
                <label>Nume {{ $errors->has('name') ? ' has-error' : '' }}</label>
                <input type="text" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <span>
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>

            <div class="row">
                <label>E-mail {{ $errors->has('email') ? ' has-error' : '' }}</label>
                <input type="email" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <span>
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <div class="row">
                <label>Parola {{ $errors->has('password') ? ' has-error' : '' }}</label>
                <input type="password" name="password">
                @if ($errors->has('password'))
                    <span>
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <div class="row">
                <label>Confirma parola {{ $errors->has('password_confirmation') ? ' has-error' : '' }}</label>
                <input type="password" name="password_confirmation">
                @if ($errors->has('password_confirmation'))
                    <span>
                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                    </span>
                @endif
            </div>

            <div class="row">
                <button type="submit" class="button expanded">
                    Inregistrare
                </button>
            </div>
        </form>

    </div>
</div>
@endsection
