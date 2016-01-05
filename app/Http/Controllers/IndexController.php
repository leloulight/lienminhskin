<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;

use Intervention\Image\Facades\Image as Image;
use Maatwebsite\Excel\Facades\Excel as Excel;
//
use Collective\Html\FormFacade as Form;
use Cartalyst\Sentry\Facades\Laravel\Sentry;


class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try
        {
            // Create the group
            $group = Sentry::createGroup(array(
                'name'        => 'Moderator',
                'permissions' => array(
                    'admin' => 1,
                    'users' => 1,
                ),
            ));
        }
        catch (Cartalyst\Sentry\Groups\NameRequiredException $e)
        {
            echo 'Name field is required';
        }
        catch (Cartalyst\Sentry\Groups\GroupExistsException $e)
        {
            echo 'Group already exists';
        }
    }
    public function excel()
    {
        Excel::create('Laravel Excel', function($excel) {
            $excel->setTitle('Mot tap tin demo');
            // Chain the setters
            $excel->setCreator('LoiTran')
                ->setCompany('SW');

            // Call them separately
            $excel->setDescription('A document demo');
            $data = array(
                array('data1', 'data2'),
                array('data3', 'data4')
            );
            $excel->sheet('Excel sheet', function($sheet) use($data) {

                $sheet->setOrientation('landscape');
                $sheet->protect('password');
                $sheet->protect('password', function(\PHPExcel_Worksheet_Protection $protection) {
                    $protection->setSort(true);
                });
                $sheet->fromArray($data, null, 'A1', false, true);
                // Manipulate first row
                $sheet->row(1, array(
                    'test1', 'test2'
                ));

// Manipulate 2nd row
                $sheet->row(2, array(
                    'test3', 'test4'
                ));

                // Append row after row 2
                $sheet->appendRow(5, array(
                    'appended', 'appended'
                ));

// Append row as very last
                $sheet->appendRow(array(
                    'appended', 'appended'
                ));

                // Add before first row
                $sheet->prependRow(10, array(
                    'prepended', 'prepended'
                ));

// Add as very first
                $sheet->prependRow(array(
                    'prepended', 'prepended'
                ));

                // Append multiple rows
                $sheet->rows(array(
                    array('test1', 'test2'),
                    array('test3', 'test4')
                ));

// Append multiple rows
                $sheet->rows(array(
                    array('test5', 'test6'),
                    array('test7', 'test8')
                ));
                $sheet->setMergeColumn(array(
                    'columns' => array('A','B','C','D'),
                    'rows' => array(
                        array(2,3),
                        array(5,11),
                    )
                ));
                $sheet->protectCells('A1', '123');
            });

        })->export('xls');
    }

    public function image()
    {
        // open an image file
        $img_logo = Image::make('public/test/2.jpg');
        $img_logo->resize(200, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        $img = Image::make('public/test/bg.png');
        $img->insert($img_logo,'center');
        return $img->response('jpg');

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('auth.register.blade.php');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        echo '<pre>';
        var_dump($request);
        echo '</pre>';
        die();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
