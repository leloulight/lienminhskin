@extends('layout._admin')
@section('content-header')

    <h1>
        Simple Tables
        <small>preview of simple tables</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Tables</a></li>
        <li class="active">Simple</li>
    </ol>
@stop
@section('content')
    <div class="row">
        <div class="col-md-12">
            <h2 class="page-header">Article</h2>
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">Tab 1</a></li>
                    <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Tab 2</a></li>
                    <li><a href="#tab_3" data-toggle="tab">Tab 3</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            Dropdown <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                        </ul>
                    </li>
                    <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_1">
                        <?php
                        $form = [
                                'url'       => URL::route('admin.article.store'),
                                'method'    => 'POST',
                                'button'    => 'Create New Page',
                                'defaults'  => [
                                        'title'             => '',
                                        'url_seo'           => '',
                                ], ];
                        ?>
                        @include('admin.article.form')
                    </div><!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_2">

                    </div><!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_3">
                    </div><!-- /.tab-pane -->
                    <div class="clearfix"></div>
                </div><!-- /.tab-content -->
            </div><!-- nav-tabs-custom -->
        </div><!-- /.col -->
    </div>
@stop

@section('extraPlugin')

        <!--引入Layer组件-->
    <script src="{{ asset('plugins/layer/layer.min.js') }}"></script>
    <!--引入iCheck组件-->
    <script src="{{ asset('plugins/iCheck/icheck.min.js') }}" type="text/javascript"></script>
    <!--引入Chosen组件-->
    @include('scripts.endChosen')

@stop