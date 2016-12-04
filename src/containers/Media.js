// 调试工具
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from '../components/TimeLine'
import "../css/Media.css"

class Media extends Component {
    componentWillMount() {
            window.scrollTo(0,0);   
     }
    render() {
        
        return (
              <div className="container">
        		     <div className="title1">Media</div>
                 <Timeline/>
                  <table className="table2">
                    <thead>
                      <tr><th>Date</th><th>Title</th><th> Media</th></tr>
                    </thead>
                    <tbody>
                       <tr><td id="14-12-2015">14-12-2015</td><td><a target="view_window"  href="http://www.chamber.org.hk/en/events/hong-kong-awards.aspx">The Hong Kong Awards for Industries: Innovation and Creativity</a></td><td> HKGCC News</td></tr>
                       <tr><td id="14-12-2015">14-12-2015</td><td><a target="view_window"  href="http://www.info.gov.hk/gia/general/201512/14/P201512110352.htm">67 companies honoured at Hong Kong Awards for Industrie</a></td><td>  Hong Kong Government Press Release</td></tr>
                       <tr><td id="17-04-2015">17-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvb28cb422663b4fa0be718377d53cbbf4">定位無難度</a></td><td>  明報</td></tr>
                       <tr><td id="16-04-2015">16-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv134d4dd354644533bec91dbd16c91b2f">港推導航app 商場WiFi尋店舖 </a></td><td> 新浪香港</td></tr>
                       <tr><td id="15-04-2015-1">15-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvad9f3c5ec4184a4e8b6ab398f35c7624">嶄新物聯網技術 奧海城率先體驗</a></td><td>IT Pro</td></tr>
                       <tr><td id="15-04-2015-2">15-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv48b63c7a2a2e46f4a8163fe8dd8d5362"> 智能手杖／廁所／室內定位 - 香港新科技助長者及障礙人士</a></td><td>unwire.hk</td></tr>
                       <tr><td id="15-04-2015-3">15-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvfbc1032470c44f05928710295f34d73f">室內定位系統 手機毋須上網  </a></td><td>經濟日報</td></tr>
                       <tr><td id="15-04-2015-4">15-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv49210bfe75594da1893f4262e1c945dd">商場Wifi 導航助尋店舖 </a></td><td> 蘋果日報</td></tr>
                       <tr><td id="14-04-2015">14-04-2015</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv098410f38cce41ee8ffaefbd2ff7564b">LSCM R&D Centre showcases latest IoT Technologies Contributing to Logistics and Social Services Sector</a></td><td> LSCM R & D Centre Press Release</td></tr>
                       <tr><td id="19-12-2014">19-12-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv61a19c50ac094b1490e368f39c753bf0">科大兩學者提升手機應用功能</a></td><td>星島日報</td></tr>
                       <tr><td id="Oct-2014">Oct-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhve4c3ee0ef3ca4ca5b6063b8d1ca9992d">Indoor Location Matters</a></td><td>OGCIO TMS e-Newsletter</td></tr>
                       <tr><td id="Aug-2014">Aug-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv7492e20c37ed45d99dbce9f7531d26bb">Indoor Localisation, Tracking and Navigation</a></td><td>LSCM R & D Centre eNews (Project Updates) </td></tr>
                       <tr><td id="Jun-2014">Jun-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhva293611e9d3c41b28377f8ba7224d44d"> Innovating New Business Opportunities 創意﹒創新商機</a></td><td>The Bulletin 工商月刊</td></tr>
                       <tr><td id="01-05-2014">01-05-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvc941d4940a6949729d31407df59c2984">科大研室內導航助商戶推廣</a></td><td>文匯報</td></tr>
                       <tr><td id="29-01-2014">29-01-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv0b846c259bcd4c24a6098974533ec4f6"> On the Right Track (Full version)</a></td><td> ITIS e-Newsletter (Issue 21)</td></tr>
                       <tr><td id="02-07-2013">02-07-2013</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvae362e741497429982c708a264dbf48c">Insider's view on shopping of tomorrow</a></td><td>The Standard</td></tr>
                       <tr><td id="25-06-2013">25-06-2013</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvcefb62035784410082a8b2330fe87d5f">On the right track</a></td><td>The Standard</td></tr>
                    </tbody>
                  </table>
                
              </div>
        )
    }
}
// export default connect()(Media)
export default Media


                      //  <tr><td>19-12-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv61a19c50ac094b1490e368f39c753bf0"> 科大兩學者提升手機應用功能</a></td><td>  星島日報</td></tr>
                      //  <tr><td>Oct-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhve4c3ee0ef3ca4ca5b6063b8d1ca9992d"> Indoor Location Matters </a></td><td> OGCIO TMS e-Newsletter</td></tr>
                      //  <tr><td>Aug-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv7492e20c37ed45d99dbce9f7531d26bb">Indoor Localisation, Tracking and Navigation</a></td><td>LSCM R & D Centre eNews (Project Updates)</td></tr>
                      //  <tr><td>Jun-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhva293611e9d3c41b28377f8ba7224d44d">Innovating New Business Opportunities 創意﹒創新商</a></td><td>The Bulletin 工商月刊</td></tr>
                      //  <tr><td>01-05-2014</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvc941d4940a6949729d31407df59c2984">科大研室內導航助商戶推廣 </a></td><td>文匯報</td></tr>
                      //  <tr><td></td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhv0b846c259bcd4c24a6098974533ec4f6">On the Right Track (Full version)</a></td><td>ITIS e-Newsletter(Issue 21)</td></tr>
                      //  <tr><td>02-07-2013</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvae362e741497429982c708a264dbf48c">Insider's view on shopping of tomorrow </a></td><td>The Standard</td></tr>
                      //  <tr><td>25-06-2013</td><td><a target="view_window"  href="https://docs.zoho.com/embed/l3hhvcefb62035784410082a8b2330fe87d5f">On the right track</a></td><td> The Standard</td></tr>