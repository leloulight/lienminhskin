@section('author_header')
@show
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
    @section('meta')
    @show
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}"
          type="image/x-icon">
    @section('head_css')
    @show
    @section('head_js')
    @show
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
@show</body>
</html>
@section('hacker_footer')
@show