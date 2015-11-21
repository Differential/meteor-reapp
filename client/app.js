import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import 'reapp-ui';
import 'reapp-ui/lib/desktopTouch'; // demo

import App from 'components/App';
import Kitchen from 'components/Kitchen';
import Modals from 'components/kitchen/Modals';
import Popovers from 'components/kitchen/Popovers';
import Bars from 'components/kitchen/Bars';
import Buttons from 'components/kitchen/Buttons';
import Cards from 'components/kitchen/Cards';
import Drawers from 'components/kitchen/Drawers';
import Lists from 'components/kitchen/Lists';
import Grids from 'components/kitchen/Grids';
import Forms from 'components/kitchen/Forms';
import Gallery from 'components/kitchen/Gallery';
import ViewLists from 'components/kitchen/ViewLists';
import DottedViewLists from 'components/kitchen/DottedViewLists';
import Mailbox from 'components/kitchen/Mailbox';
import Twitter from 'components/kitchen/Twitter';
import TweetView from 'components/kitchen/twitter/TweetView';
import createBrowserHistory from 'history/lib/createBrowserHistory'

module.exports = (
  <Router history={createBrowserHistory()}>
    <Route component={App} path="/">
      <Route path="kitchen" component={Kitchen}>
        <Route path="modals" component={Modals} />
        <Route path="popovers" component={Popovers} />
        <Route path="bars" component={Bars} />
        <Route path="buttons" component={Buttons} />
        <Route path="cards" component={Cards} />
        <Route path="drawers" component={Drawers} />
        <Route path="lists" component={Lists} />
        <Route path="grids" component={Grids} />
        <Route path="forms" component={Forms} />
        <Route path="gallery" component={Gallery} />
        <Route path="view-lists" component={ViewLists} />
        <Route path="dotted-view-lists" component={DottedViewLists} />
        <Route path="mailbox" component={Mailbox} />
        <Route path="twitter" component={Twitter}>
          <Route path="tweetView" component={TweetView} />
        </Route>
      </Route>
    </Route>
  </Router>
)
