<?php

namespace App\Http\Controllers;

use App\Chart;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() // untuk data keranjang user
    {
        $charts = Chart::orderBy('created_at', 'DESC')
            ->when(request()->q, function($charts) {
                $charts = $charts->where('user_id', request()->q);
        })->paginate(10);

        // $charts->load('status:id,name');
        // $user = User::all();
        return response()->json([
            'status' => 'success', 
            'data' => $charts,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id'=>'required|numeric',
            'product_id'=>'required|numeric',
            'harga'=>'required|integer',
            'qty'=>'required|numeric'
        ]);

        $chart = new Chart();

        $chart->qty         = 1;
        $chart->user_id     = $request->user_id;
        $chart->product_id  = $request->product_id;
        $chart->harga       = $request->harga;

        if ($chart->save()) {
            return response()->json([
                'status'=>'sukses',
                'message'=>'sukses input to chart',
                ], 200);  
        } else {
            return response()->json([
                'status'=>'failed',
                'message'=>'gagal input to chart',
                ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Chart  $chart
     * @return \Illuminate\Http\Response
     */
    public function show(Chart $chart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Chart  $chart
     * @return \Illuminate\Http\Response
     */
    public function edit(Chart $chart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Chart  $chart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chart $chart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Chart  $chart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chart $chart)
    {
        //
    }
}
