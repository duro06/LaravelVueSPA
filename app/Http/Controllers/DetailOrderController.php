<?php

namespace App\Http\Controllers;

use App\DetailOrder;
use Illuminate\Http\Request;

class DetailOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // Request $request
    public function index()
    {
        $details = DetailOrder::orderBy('created_at', 'DESC')
            ->when(request()->q, function($details) {
                $details = $details->where('order_id', request()->q);
        })->get();

        $details->load('product:id,name');
        // $user = User::all();
        return response()->json([
            'status' => 'success', 
            'data' => $details,
            ]
        );
    }

    /*
    Coba sendiri dulu...
    Request $request
     */
// public function ngambil()
public function ngambil(Request $request)
    {

        $request->validate([
            'q'=>'required|numeric',            
        ]);
        
        $details = DetailOrder::orderBy('created_at', 'DESC')
            ->when($request->q, function($details) {
                $details = $details->where('order_id', request()->q);
        })->get();
        $details->load('product:id,name');
        // $user = User::all();
        return response()->json([
            'status' => 'success', 
            'data' => $details,
            ]
        );

        // return response()->json($details->all(),200);
        // return response()->json(request()->all(),200);
        // return response()->json($request->all(),200);
        // $request->validate([
        //     'q'=>'required|numeric',
        // ]);

        // $details = DetailOrder::orderBy('created_at', 'DESC')
        //     ->when($request->q, function($details) {
        //         $details = $details->where('order_id', $request->q);
        // })->get();

        // $details->load('product:id,name');
        // // $user = User::all();
        // return response()->json([
        //     'status' => 'success', 
        //     'data' => $details,
        //     ]
        // );
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function show(DetailOrder $detailOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(DetailOrder $detailOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DetailOrder $detailOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DetailOrder  $detailOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(DetailOrder $detailOrder)
    {
        //
    }
}
