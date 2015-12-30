<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>@section('title') @show</title>
    @section('meta')
    @show
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    @section('css')
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/icons.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/animate.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/responsive.css') }}" rel="stylesheet" type="text/css"/>
    @show
</head>
<body @section('body_attr')class=""@show>
@section('beforeBody')
@show
@section('body')
@show
@section('afterBody')
@show
@section('js')
    <script type='text/javascript' src='{{ asset('js/jquery-1.11.3.min.js') }}'></script>
<script type='text/javascript' src='{{ asset('js/migrate.js') }}'></script>
<script type='text/javascript' src="{{ asset('js/seven.min.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/owl.carousel.min.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/jquery.li-scroller.1.0.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/jquery.fitvids.js') }}"></script>
<script type='text/javascript' src="{{ asset('plugins/prettyphoto/js/jquery.prettyPhoto.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/custom.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/skin.js') }}"></script>
@show
</body>
</html>