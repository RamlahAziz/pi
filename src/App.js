import logo from "./images/picturePathLogo.png";
import googlePlayBadge from "./images/google-play-badge.png";
import appStoreBadge from "./images/app-store-badge.png";
import motherSon from "./images/section2picturepath_child_parent@1X.png";
import phoneScreen1 from "./images/section3-phone-screenshot.png";
import phoneScreen2 from "./images/section3-phone-screenshot-2.png";
import phoneScreen3 from "./images/section3-phone-screenshot3.png";
import screenshot from "./images/Screen-shot-person.png";
import screenshot2 from "./images/Screen-Shot-2.png";
import tablets from "./images/tablets.png";
import facebookIcon from "./images/facebook.png";
import twitterIcon from "./images/twitter.png";
import youtubeIcon from "./images/youtube.png";
import instagramIcon from "./images/instagram.png";
import motherChildren from "./images/Mother-with-two-children@1X.png";
import TeacherStudent from "./images/Teacher-with-students.jpg";
import "./App.css";

// import { makeStyles } from '@material-ui/core/styles';
// const styles = makeStyles({})

// REACT-JSS
// import {createUseStyles} from 'react-jss'
// const styles = createUseStyles({})

// STYLED COMPONENTS
// import styled from 'styled-components'
//styled component Li
// const Li = styled.li`
//   color : blue;
//   font-size : 23px
// `

// NODE-SASS

// fill in alts
// components, props, styles

function App() {
    return (
        <div className='App'>
            <header>
                <div className='menuBar content'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                    {/* ul, li, anchor tags */}
                    <p>Why picturepath</p>
                    <p>Our Products</p>
                    <p>Support</p>
                    <p>Story</p>
                    <p>What Users Think</p>
                    <p>Our Partners</p>
                    <p>Blog</p>
                </div>
            </header>
            {/* section tag */}
            <div className='section1'>
                <div className='intro'>
                    <div className='content'>
                        <h1>
                            Visual timelines for children with Autism Autism
                            Autism
                        </h1>
                        <p>
                            With picturepath you can customise a convenient
                            visual timeline and allow your children to progress
                            through their day
                        </p>
                        <button>Our Products</button>
                    </div>
                </div>
                <div className='demo'>
                    <div className='content'>
                        <h4>
                            You can request a demo or download and start using
                            picturepath
                        </h4>
                        <img
                            className='app-store'
                            src={googlePlayBadge}
                            alt=''
                        />
                        <img className='app-store' src={appStoreBadge} alt='' />
                    </div>
                </div>
            </div>

            <div className='section2'>
                <div className='halfscreen'>
                    <img id='motherSon' src={motherSon} alt='' />
                </div>
                <div className='halfscreen'>
                    <div className='boxContent'>
                        <h3>
                            picturepath allows you to see the day in their way
                        </h3>
                        <h4>
                            With picturepath you can customise a convenient
                            visual timeline and allow your children to progress
                            through their day
                        </h4>
                        <button>Our Products</button>
                    </div>
                </div>
            </div>

            <div className='section3 content'>
                <div className='section3grid'>
                    <p>Mobile app for parents</p>
                    <div className='screenshotHolder'>
                        <img src={phoneScreen1} alt='' />
                    </div>
                </div>
                <div className='section3grid'>
                    <p>Mobile app for children</p>
                    <div className='screenshotHolder'>
                        <img src={phoneScreen2} alt='' />
                    </div>
                </div>
                <div className='section3grid'>
                    <p>Web app for schools</p>
                    <div className='screenshotHolder'>
                        <img src={phoneScreen3} alt='' />
                    </div>
                </div>
            </div>
            <div className='section3b content'>
                <div className='section3grid'>
                    <p>Easy to use timeline planning</p>
                    <img src={screenshot2} alt='' />
                </div>
                <div className='section3grid'>
                    <p>Link your home and school timelines</p>
                    <img src={screenshot} alt='' />
                </div>
                <div className='section3grid'>
                    {" "}
                    <p>100’s of activities to choose from</p>
                    <img src={screenshot} alt='' />
                </div>
            </div>
            <div className='section4'>
                <div className='halfscreen'>
                    <div className='boxContent'>
                        <h3>Use picturepath across multiple devices</h3>
                        <h4>
                            With picturepath you can customise a convenient
                            visual timeline and allow your children to progress
                            through their day
                        </h4>
                        <button>See more features</button>
                    </div>
                </div>
                <div className='halfscreen'>
                    <img
                        id='tablets'
                        src={tablets}
                        alt=''
                        width='555'
                        height='277'
                    />
                    {/* don't use id, use classname */}
                </div>
            </div>
            <div className='section5'>
                <img src={motherChildren} alt=''></img>
                <div class='half'></div>
                <div className='section5Content'>
                    <div className='boxContent'>
                        <h2>Why use picturepath mobile app app app app app</h2>
                        <h4>
                            With picturepath you can customise a convenient
                            visual timeline
                        </h4>
                        <h3>Benefit one Benefit one Benefit one</h3>
                        <h3>Benefit two</h3>
                        <h3>Benefit three</h3>
                        <h3>Benefit four</h3>
                        <button>See more features</button>
                    </div>
                </div>
            </div>
            <div className='section6'>
                <div className='section6Content'>
                    <div className='boxContent'>
                        <h2>Why use picturepath mobile app app app app app</h2>
                        <h4>
                            With picturepath you can customise a convenient
                            visual timeline
                        </h4>
                        <h3>Benefit one Benefit one Benefit one</h3>
                        <h3>Benefit two</h3>
                        <h3>Benefit three</h3>
                        <h3>Benefit four</h3>
                        <button>See more features</button>
                    </div>
                </div>
                <img src={TeacherStudent} />
            </div>
            <div className='section7'>
                <div className='content'>
                    <div className='review'>
                        <div className='circularMask reviewpic1'></div>
                        <p>
                            “Picturepath is less time consuming (than the
                            current system we use) and the children like it more
                            because it's on an iPad”
                        </p>
                        <p className='end'>Jo Sheldon SEN Teacher</p>
                    </div>
                    <div className='review'>
                        <div className='circularMask reviewpic2'></div>

                        <p>“I love ticking off the activities”</p>
                        <p className='end'>Freddie Age 6</p>
                    </div>
                    <div className='review'>
                        <div className='circularMask reviewpic3'></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <p className='end'>Mrs Bradshaw Teacher</p>
                    </div>
                </div>
            </div>
            <div className='section8'>
                <div className='section8content'>
                    <h1>
                        Why not try our premium version which is packed full of
                        additional features
                    </h1>
                    <p>
                        With picture path you can customise a convenient visual
                        timeline and allow your children to progress through
                        their day
                    </p>
                    <button>See premium features</button>
                    <div className='social'>
                        <img
                            className='app-store'
                            src='images/google-play-badge.png'
                            alt=''
                        />
                        <img
                            className='app-store'
                            src='images/app-store-badge.png'
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footerContent content'>
                    {/* anchor tag */}
                    <ul>
                        <li>Why use picturepath</li>
                        <li>Benefits to Parents</li>
                        <li>Benefits to Children</li>
                        <li>Benefits to Schools</li>
                        <li>User Panel</li>
                    </ul>
                    <ul>
                        <li>Our Products</li>
                        <li>Mobile Application</li>
                        <li>Web Application</li>
                    </ul>
                    <ul>
                        <li>Support</li>
                        <li>FAQ’s</li>
                        <li>Our Story</li>
                        <li>What Users Think</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>Information</li>
                        <li>Us</li>
                        <li>Scheme</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    <div className='social'>
                        <p>Follow us</p>
                        <div className='socialList'>
                            <div className='circularMaskSmall'>
                                <img src={facebookIcon} alt='' />
                            </div>
                            <div className='circularMaskSmall'>
                                <img src={twitterIcon} alt='' />
                            </div>
                            <div className='circularMaskSmall'>
                                <img src={youtubeIcon} alt='' />
                            </div>
                            <div className='circularMaskSmall'>
                                <img src={instagramIcon} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
