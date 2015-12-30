<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>@section('title') @show</title>
    <meta name="description" content="{{ isset($description) ? $description : 'Blog' }}"/>
    <meta name="keywords" content="{{ Cache::get('website_keywords') }}"/>
    <meta name="author" content="{{ Cache::get('system_author_website') }}"/>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/icons.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/animate.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/responsive.css') }}" rel="stylesheet" type="text/css"/>
    @section('beforeStyle')
    @show
    @section('head_style')
    @show
    @section('afterStyle')
    @show
</head>
<body @section('body_attr')class=""@show>
@section('beforeBody')
@show
@section('body')
@show
@section('afterBody')
@show
@section('head_js')
<script type='text/javascript' src='http://d.theme20.com/sevenmag/wp-includes/js/jquery/jquery.js?ver=1.11.1'></script>
<script type='text/javascript' src='http://d.theme20.com/sevenmag/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
<script src="{{ asset('js/seven.min.js') }}"></script>
<script src="{{ asset('js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('js/jquery.li-scroller.1.0.js') }}"></script>
<script src="{{ asset('js/jquery.fitvids.js') }}"></script>
<script src="{{ asset('plugins/prettyphoto/js/jquery.prettyPhoto.js') }}"></script>
<script src="{{ asset('js/custom.js') }}"></script>
@parent
@stop
@section('head_js')
@show
</body>
</html>