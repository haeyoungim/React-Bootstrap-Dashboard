import React, { Component } from 'react';
import NavBarView from './Visual/NavBarView';
import SideBarView from './Visual/SideBarView';
import FooterView from './Visual/FooterView';
import ModalView from './Visual/ModalView';
import CircleThumbnail from './Visual/CircleThumbnail';
import ReviewCard from './Visual/ReviewCard';
import DeckedCard from './Visual/DeckedCard'
import Highlight from './Utils/Highlight';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarView />
                <div class="container-fluid" id="main">
                    <div class="row row-offcanvas row-offcanvas-left">
                        <SideBarView />
                        {/* <!--/col--> */}

                        <div class="col main pt-5 mt-3">
                            <h1 class="display-4 d-none d-sm-block">
                                Bootstrap 4 Dashboard
            </h1>
                            <p class="lead d-none d-sm-block">Plus off-canvas sidebar, based on Bootstrap v4</p>

                            <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    <span class="sr-only">Close</span>
                                </button>
                                <strong>Holy guacamole!</strong> It's free.. this is an example theme.
            </div>
                            <div class="row mb-3">
                                <ReviewCard color="bg-success" title="Users" data="120" icon="fa fa-user" />
                                <ReviewCard color="bg-danger" title="Posts" data="77" icon="fa fa-plus-square" />
                                <ReviewCard color="bg-info" title="Ads" data="150" icon="fa fa-ad" />
                                <ReviewCard color="bg-warning" title="Badges" data="10" icon="fa fa-award " />

                            </div>
                            Code example:
                            <Highlight code={'<ReviewCard color="bg-success" title="Users" data="135" icon="fa fa-user" />'} />
                            
                            {/* <!--/row--> */}

                            <hr />
                            <div class="row placeholders mb-3">
                                <CircleThumbnail inside="100" title="My text" subtitle="This works!!" />
                                <CircleThumbnail inside="101" title="My text" subtitle="This works!!" />
                                <CircleThumbnail inside="102" title="My text" subtitle="This works!!" />
                                <CircleThumbnail inside="103" title="My text" subtitle="This works!!" />
                            </div>

                            <a id="features"></a>
                            <hr />
                        </div>
                    </div>
                </div>

                <FooterView />



            </React.Fragment>
        );
    }
}

export default App;
