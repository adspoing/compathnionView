import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由
import { App, Home, Cloud, Track, Crowd, Yourway, Hkust ,Cyberport, Olympian,HKIA, Media,Events, AboutUs,Contact,Investor,Video} from './containers' // 引入各容器组件

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="index" component={Home}/>
        <Route path="cloud" component={Cloud}/>
        <Route path="track" component={Track}/>
        <Route path="crowd" component={Crowd}/>
        <Route path="wherami_in_hkust" component={Hkust}/>
        <Route path="wherami_in_cyberport" component={Cyberport}/>
        <Route path="wherami_in_olympian" component={Olympian}/>
        <Route path="trials_in_hkia" component={HKIA}/>
        <Route path="media" component={Media}/>
        <Route path="events" component={Events}/>
        <Route path="about" component={AboutUs}/>
        <Route path="contact" component={Contact}/>
        <Route path="investor" component={Investor}/>
        <Route path="video_channel" component={Video}/>
    </Route>
)