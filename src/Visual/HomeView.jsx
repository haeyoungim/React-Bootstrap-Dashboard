import React from 'react'
import SideBarView from './SideBarView';
import CircleThumbnail from './CircleThumbnail';
import ReviewCard from './ReviewCard';
import DeckedCard from './DeckedCard'
import Highlight from '../Utils/Highlight';

const HomeView = () => {
    return (
        <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
                <SideBarView />
                {/* <!--/col--> */}

                <div class="col main pt-5 mt-3">
                    <h1 class="display-4 d-none d-sm-block">
                        React-Bootstrap
            </h1>

                    <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Holy guacamole!</strong>
            </div>
                    <div class="row mb-3">
                        <ReviewCard color="bg-success" title="Users" data="135" icon="fa fa-user" />
                        <ReviewCard color="bg-danger" title="Posts" data="88" icon="fa fa-plus-square" />
                        <ReviewCard color="bg-info" title="Ads" data="126" icon="fa fa-ad" />
                        <ReviewCard color="bg-warning" title="Badges" data="15" icon="fa fa-award " />

                    </div>

                    <hr />
                    <div class="row placeholders mb-3">
                        <CircleThumbnail inside="100" title="제목" subtitle="본문" />
                        <CircleThumbnail inside="101" title="제목" subtitle="본문" />
                        <CircleThumbnail inside="102" title="제목" subtitle="본문" />
                        <CircleThumbnail inside="103" title="제목" subtitle="본문" />
                    </div>

                    <hr />

                    <div class="row my-4">
                        <div class="col-lg-3 col-md-4">
                            <div class="card">
                                <img class="card-img-top img-fluid" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card image cap" />
                                <div class="card-body">
                                    <h4 class="card-title">Button</h4>
                                    <a href="#" class="btn btn-primary">Button</a>
                                </div>
                            </div>
                            <div class="card card-inverse bg-inverse mt-3">
                                <div class="card-body">
                                    <h3 class="card-title">Outline</h3>
                                    <a href="#" class="btn btn-outline-secondary">Outline</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>#</th>
                                            <th>Label</th>
                                            <th>Header</th>
                                            <th>Column</th>
                                            <th>Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td>a</td>
                                            <td>b</td>
                                            <td>c</td>
                                            <td>d</td>
                                        </tr>
                                        <tr>
                                            <td>1,002</td>
                                            <td>a</td>
                                            <td>b</td>
                                            <td>c</td>
                                            <td>d</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>a</td>
                                            <td>b</td>
                                            <td>c</td>
                                            <td>d</td>
                                        </tr>
                                        <tr>
                                            <td>1,003</td>
                                            <td>a</td>
                                            <td>b</td>
                                            <td>c</td>
                                            <td>d</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <a id="layouts"></a>
                    <hr />
                </div>
                {/* <!--/main col--> */}
            </div>

        </div>
  )
}

export default HomeView
