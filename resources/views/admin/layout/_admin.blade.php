@extends('admin.layout._base')
@section('author_header')
@stop
@section('title') Dashboard - Admin
@stop
@section('meta')
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
@stop
@section('head_css')
    <link href="{{ asset('public/admin/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet"
          type="text/css"/>    <!-- Font Awesome Icons -->
    <link href="{{ asset('public/admin/lib/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet"
          type="text/css"/>    <!-- Ionicons -->
    <link href="{{ asset('public/admin/lib/ionicons/css/ionicons.min.css') }}" rel="stylesheet"
          type="text/css"/>    <!-- Theme style -->
    <link href="{{ asset('public/admin/dist/css/AdminLTE.min.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('public/admin/dist/css/skins/_all-skins.min.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('public/admin/plugins/iCheck/all.css') }}" rel="stylesheet"
          type="text/css"/>
    @stop
    @section('head_js')    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->    <!--[if lt IE 9]>
    <script src="{{ asset('public/admin/lib/html5shiv/3.7.2/html5shiv.js') }}"></script>
    <script src="{{ asset('public/admin/lib/respond.js/1.4.2/respond.min.js') }}"></script>    <![endif]-->
    @parent
@stop
@section('body_attr') class="skin-blue sidebar-mini"
@stop
@section('body')
    <div class="wrapper">
        @include('admin.widgets.main-header')
        @include('admin.widgets.main-sidebar')

        <div class="content-wrapper">

            <section class="content-header">
                @section('content-header')
                @show
            </section>
            <!-- Main content -->
            <section class="content">
                @section('content')
                @show
            </section>
        </div>
        @include('admin.widgets.main-footer')
@stop
@section('afterBody')
        <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
        @include('admin.widgets.control-sidebar')
    </aside><!-- /.control-sidebar -->
    <div class="control-sidebar-bg"></div>
    </div><!-- ./wrapper -->

    <!-- jQuery 2.1.4 -->
    <script src="{{ asset('public/admin/plugins/jQuery/jQuery-2.1.4.min.js') }}"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="{{ asset('public/admin/bootstrap/js/bootstrap.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('public/admin/dist/js/app.min.js') }}"></script>
    <!-- Slimscroll -->
    <script src="{{ asset('public/admin/plugins/slimScroll/jquery.slimscroll.min.js') }}"></script>
@section('extraPlugin')
@show

@section('extraSection')
@show
@stop


@section('hacker_footer')
@stop