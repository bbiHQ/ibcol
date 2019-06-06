import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { media, style } from 'helpers/styledComponents.js';

import configs from 'configs';

import {translate} from 'helpers/translate.js';
import { transparentize } from 'polished'

import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';

import Head from 'next/head';

const ThisPageContainerComponent = styled(PageContainerComponent)`
iframe {
  width: 100%;
  height: 500px;
}
#schedule .row {
    display: none;
}
.schedule td{
  padding: 20px;
  vertical-align: top;
}
.schedule td:first-child {
  padding-left: 20px;
}
.schedule td h5 {
  margin: 0 0 10px;
}
.schedule td p {
  margin: 0 0 10px;
}
.schedule td.blue {
  border-right: 5px solid blue;
}
.schedule td.red {
  border-right: 5px solid red;
}
.schedule td.green {
  border-right: 5px solid green;
}
.schedule td.orange {
  border-right: 5px solid orange;
}
.session-schedule-time {
  width: 20%;
}
.session-schedule-detail {
  width: 80%;
}
.block-tab-full {
  margin-bottom: 100px;
}
.col-block a {
  display: inline-block;
  margin-right: 30px;
  padding: 30px 0;
}
.col-block a h4{
  margin-bottom: 0;
}
.stickynav {
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  max-width: none;
  border-bottom: 1px solid #ececec;
}
.stickynav .col-block {
  float: none;
  text-align: center;
}
@media (max-width: 640px){

.col-block a {
  display: inline-block;
  margin-right: 0;
  padding: 10px 0;
  width: 100%;
}
.schedule h4{
  display: inline-block;
  margin-right: 0;
  width: 100%;
}
  

`;


export default class extends React.Component {
    static async getInitialProps({ query }) {
      
      return { query }
    }
    
    translate = (t) => translate(t, 'schedule', this.props.query.locale);
    
    render() {
      
      // console.log(">>> query", this.props.query);
  
      
      const locale = this.props.query.locale;

      return (
        <ThisPageContainerComponent>
          <Head>
              <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('pageTitle')}</title>
              <meta name="description" content={this.translate('seoDescription')}/>
              <meta name="keywords" content={this.translate('keywords')}/>
              <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
              <meta property="og:type" content="website" />
          </Head>

          <section className="s-section first target-section">

            <div className="row section-header">

                <div className="col-block">
                    <h4 className="subhead">{this.translate('subhead')}</h4>
                </div>
            </div>
        </section>
        <div class="row section-header center" style={{textAlign:"center"}}>
          <div class="col-block">
            {/* <a href="#schedule"><h4 class="subhead">Schedule</h4></a> */}
            <a href="#locations"><h4 class="subhead">Locations</h4></a>
            <a href="#tips"><h4 class="subhead">Local Tips</h4></a>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-block">
          <a href="#schedule"><h4 class="subhead">Schedule</h4></a>
          <a href="#locations"><h4 class="subhead">Locations</h4></a>
          <a href="#tips"><h4 class="subhead">Local Tips</h4></a>
          <hr></hr>
          </div>
          
        </div> */}

        <section class="s-section target-section" id="schedule">

          <div class="row">
              <div class="col-block">
                  <h1>Schedule</h1>
                  <h4 class="item-title">Friday 5 July</h4>
              </div>
              <div class="schedule" >
                  <table class="day1">
                      <tbody>
                          <tr>
                              <td class="session-schedule-time blue">
                                  <p>5:00 PM - 6:30 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Registration</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time red">
                                  <p>6:30 PM - 7:00 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Opening Ceremony</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time green">
                                  <p>7:00 PM - 8:00 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Dinner</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time orange">
                                  <p>8:00 PM - 9:00 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Games</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <h4 class="item-title">Saturday 6 July</h4>
                  <table class="day2">
                      <tbody>
                          <tr>
                              <td class="session-schedule-time blue">
                                  <p>9:00 AM - 9:30 AM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Exhibition Opens</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time red">
                                  <p>9:30 AM - 10:00 AM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Opening Remarks</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time green">
                                  <p>10:00 AM - 12:00 AM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Unconference</h5>
                                  <p>Chamber 1A and 1B</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time orange">
                                  <p>12:00 PM - 1:30 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Lunch</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time blue">
                                  <p>1:30 PM - 2:30 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Pitch Session 1</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time red">
                                  <p>3:15 PM - 4:15 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Pitch Session 2</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time green">
                                  <p>5:00 PM - 5:45 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Unconference</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <h4 class="item-title">Sunday 7 July</h4>
                  <table class="day3">
                      <tbody>
                          <tr>
                              <td class="session-schedule-time blue">
                                  <p>9:00 AM - 9:30 AM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Exhibition Opens</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time red">
                                  <p>9:30 AM - 10:30 AM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Opening Remarks</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time green">
                                  <p>10:30 AM - 11:30 AM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Pitch Session 3</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time orange">
                                  <p>12:00 PM - 1:30 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Lunch</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time blue">
                                  <p>1:30 PM - 2:30 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Pitch Session 4</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time red">
                                  <p>3:15 PM - 4:15 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Pitch Session 5</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td class="session-schedule-time green">
                                  <p>5:00 PM - 5:45 PM</p>
                              </td>
                              <td class="session-schedule-detail">
                                  <h5>Closing Ceremony</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div> 
        </section>

        <section class="s-section target-section" id="locations">
                <div class="row">
                    <div class="col-block">
                        <h1>Locations</h1>
                    </div>
                    
                    <div class="block-1-2 block-tab-full">
                        <div class="col-block">
                        <h4 class="item-title">Leung Ko Yuk Tak Lecture Theatre, Yeung Kin Man Academic Building (LT-14)<br/> @ City University of Hong Kong</h4>
                            <a href="https://goo.gl/maps/9g11DNf6fwJt9pLN7" target="_blank" >83 Tat Chee Ave, Kowloon Tong</a>
                            <p>City University of Hong Kong is located in the heart of Kowloon Tong amidst idyllic settings, and is surrounded by schools and is adjacent to one of the city’s most popular upscale shopping centres.</p>
                            <p>Just as all roads lead to Rome, City University of Hong Kong is one of Hong Kong’s key epicentres. The state-of-the-art facility is just 19 minutes from the city’s CBD, 42 minutes from Hong Kong International Airport and 43 minutes from the Shenzhen border, by Mass Transit Railway. </p>
                            <p>In addition, buses, mini buses and taxis make City University of Hong Kong even more accessible from anywhere in Hong Kong. </p> 
                        </div>

                        <div class="col-block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14761.865903624534!2d114.1732325!3d22.3360087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb13b4355bdf28a9d!2z6aaZ5riv5Z-O5biC5aSn5a245qWK5bu65paH5a246KGT5qiT!5e0!3m2!1szh-TW!2shk!4v1559725726775!5m2!1szh-TW!2shk" frameborder="0" allowFullScreen></iframe>
                        </div>
                    </div>


                </div>
        </section>

        <section class="s-section target-section" id="tips">
          <div class="row">
            <div class="col-block">
                <h1>Local Tips</h1>
            </div>
            <div class="block-1-2 block-tab-full">
                <div class="col-block">
                    <h4 class="item-title">1. Greetings</h4>
                    <p>Hugging or kissing on the cheeks may be your usual greeting when meeting someone, but not in Hong Kong. In fact, such warm signs of affection may often leave the other person feeling rather flustered and awkward. Of course, that’s not to say that everyone is put off by a harmless kiss on the cheek, but when you’re meeting someone for the first time, it’s better to be safe than sorry. So save your hugs and kisses for your nearest and dearest, and keep it more formal with a simple handshake, while avoiding too much body contact. </p>
                </div>
                <div class="col-block">
                    <h4 class="item-title">2. MTR Tactics</h4>
                    <p>Whether you’re new in town, or a seasoned Hong Konger, there’s one thing about this city that never ceases to amaze us – the MTR. More specifically, the people on it. From crowds of tie-wearing zombies shuffling to work every morning, to sprint races across station platforms to make it onto the next train before the doors close, the MTR is truly a great place of entertainment. It may look hilarious to those new to Hong Kong, but for the locals, this is simply a part of everyday life. So go ahead, run across the platform, and don’t be afraid to get real nice and tight with other people riding the train. It’s the only way to become a true local.</p>
                </div>
            </div>
            <div class="block-1-2 block-tab-full">
                <div class="col-block">
                    <h4 class="item-title">3. Business Cards</h4>
                    <p>Exchanging business cards is a quick and easy way to trade information with others, but be careful how you hand them out. In Hong Kong, it is considered rude to hand out your business card with only one hand. Instead, the person giving the card should hold the card with both hands, with the text facing the recipient, usually accompanied with a subtle nod of the head. It may seem like a lot to remember, but this simple gesture will be very much appreciated and make a positive first impression.</p>
                </div>
                <div class="col-block">
                    <h4 class="item-title">4. Gift Giving</h4>
                    <p>Although it is more of a superstition rather than a custom, it’s widely believed by many Hong Kongers that items like shoes and clocks should never be given as gifts. Giving someone a pair of shoes is considered a bad sign, as it suggests the other person should “run away”. Presenting a clock or a watch as a gift is also a big no-no in Hong Kong, because in Cantonese, the phrase for giving a clock – “Sung Jung” – sounds the same as the phrase for paying your last respects to a close family member. Yikes.</p>
                </div>
            </div>    
            <div class="block-1-2 block-tab-full">
                <div class="col-block">
                    <h4 class="item-title">5. Lucky Versus Unlucky Numbers</h4>
                    <p>You may have noticed that the number four is not often used in Hong Kong. This is because it is considered unlucky, due to the fact that in Cantonese, the word “four” sounds very similar to the word “death”. A perfect example of this can be found in elevators where there is no option to go to the fourth floor, or any other floors ending with the number four, for that matter. Don’t worry, these floors do actually exist, they just aren’t numbered. On the bright side, simply double the four, and you’ve got yourself a lucky number, because the number eight is considered to bring luck as it sounds like the word “fortune” in Cantonese.</p>
                </div>
                <div class="col-block">
                    <h4 class="item-title">6. Extra Chopsticks</h4>
                    <p>When you’re in a Chinese restaurant, you might have noticed that you have two sets of chopsticks at your seat, often in different colours. The reason for them? Hygiene. While one pair of chopsticks is for eating with, the extra pair is strictly meant for transferring food into your own bowl. If a dish arrives with an extra spoon or pair of chopsticks, use those instead. Speaking of chopsticks, never stick these in your bowl of rice, especially not in an upright position. Not only is it seen as impolite and disrespectful, it’s also bad luck as the upright chopsticks resemble the imagery of incense sticks burning at a tomb for the dead. Eek!</p>
                </div>
            </div>   
            <div class="block-1-2 block-tab-full">
                <div class="col-block">
                    <h4 class="item-title">7. Tapping the Table</h4>
                    <p>There’s no Hong Kong without dim sum, and there’s no dim sum without a hot cup of Chinese tea. But if you’ve ever been to a dim sum restaurant, you might be wondering why so many Hong Kongers like to tap the table when tea is being poured for them. We know it seems like a rude gesture, as if they were hurrying the server to finish pouring, but on the contrary, this light tapping of two fingers on the table is a gesture of appreciation. Think of it as a discreet way of saying “thank you” without actually saying it.</p>
                </div>
            </div>  

          </div>
        </section>
          
          </ThisPageContainerComponent>
        )
    }
}