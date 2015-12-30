<form class="form-horizontal" action="{{ $form['url'] }}" method="{{ $form['method'] }}">
    {{ csrf_field() }}
    <input type="hidden" name="_method" value="{{ isset($form['_method'])? $form['_method'] : $form['method'] }}">
    <div class="form-group {!! ($errors->has('title')) ? ' has-error' : '' !!}">
        <label for="inputEmail3" class="col-sm-2 control-label">Tiêu đề</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEmail3" placeholder="Tiêu đề" value="{!! Request::old('title', $form['defaults']['title']) !!}">
            {!! ($errors->has('title') ? $errors->first('title') : '') !!}
        </div>
    </div>

    <div class="form-group {!! ($errors->has('url')) ? ' has-error' : '' !!}">
        <label for="inputEmail3" class="col-sm-2 control-label">Url</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="url_seo" placeholder="Url" value="{!! Request::old('url', $form['defaults']['url_seo']) !!}">
        </div>
    </div>

    <div class="form-group">
        <div class="col-md-offset-2 col-sm-offset-3 col-sm-10 col-xs-12">
            <button class="btn btn-primary" type="submit"><i class="fa fa-rocket"></i> {!! $form['button'] !!}</button>
        </div>
    </div>
</form>