@extends('layout._frontend')
@section('body_attr')
class="home page page-id-39 page-template page-template-page-home-slideshow page-template-page-home-slideshow-php _masterslider _msp_version_2.7.2 wpb-js-composer js-comp-ver-4.3.4 vc_responsive"
@stop
@section('body')
<div id="layout" class="boxed-margin ">
    @include('widgets.header')
    @include('widgets.slider')
</div>
@stop