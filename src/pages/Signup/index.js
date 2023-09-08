import React, { useEffect } from 'react';
import $ from 'jquery';


const SignUp = () => {

  useEffect(() => {
    // Your JavaScript code here
    $("main").addClass("pre-enter").removeClass("with-hover");
    setTimeout(function () {
      $("main").addClass("on-enter");
    }, 500);
    setTimeout(function () {
      $("main").removeClass("pre-enter on-enter");
      setTimeout(function () {
        $("main").addClass("with-hover");
      }, 50);
    }, 3000);

    $("h1 a").click(function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      if ($(this).is("#link-signup")) {
        $("#form-login").removeClass("active");
        $("#intro-login").removeClass("active");
        setTimeout(function () {
          $("#form-signup").addClass("active");
          $("#intro-signup").addClass("active");
        }, 50);
      } else {
        $("#form-signup").removeClass("active");
        $("#intro-signup").removeClass("active");
        setTimeout(function () {
          $("#form-login").addClass("active");
          $("#intro-login").addClass("active");
        }, 50);
      }
    });
  }, []); // The empty dependency array ensures this code runs once after component mount

  return (
    <div><main className="with-hover">
      <aside>
        <div>
          <svg viewBox="0 0 100 100">
            <g
              stroke="#fff"
              strokeWidth="{3}"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M65.892702,73 C70.3362168,68.5836139 73.0845878,62.4824333 73.0845878,55.7432553 C73.0845878,49.0040774 70.3362168,42.9028968 65.892702,38.4865107 C61.4491873,34.0701246 55.3105288,31.338533 48.5299539,31.338533 C41.749379,31.338533 35.6107205,34.0701246 31.1672058,38.4865107 C26.723691,42.9028968 23.97532,49.0040774 23.97532,55.7432553 C23.97532,62.4824333 26.723691,68.5836139 31.1672058,73 C31.1672058,73 65.892702,73 65.892702,73 Z M73.0594097,62.3985471 C76.4680437,61.2200182 88.5607213,56.1793944 85.5117743,37.8371245 L81.6924976,37.9360303 C80.8526284,43.134546 77.152648,46.6051883 72.4845099,46.6051883 M24.4062209,60.319036 C24.3904842,60.3191058 24.3747393,60.3191408 24.3589862,60.3191408 C18.6378761,60.3191408 14,55.70958 14,50.0233985 C14,44.3372171 18.6378761,39.7276563 24.3589862,39.7276563 C26.0569266,39.7276563 27.6594543,40.133673 29.0736464,40.8533508 M65.8946819,38.4867877 L31.1652244,38.4844448 M37.6782363,44.9577899 C34.9010396,47.7180312 33.1833077,51.5312691 33.1833077,55.7432553 C33.1833077,59.9552416 34.9010396,63.7684794 37.6782363,66.5287208 M45.4606247,29.0505903 L51.5992831,29.0505903 M48.5299539,26 L48.5299539,31.338533" />
            </g>
          </svg>
          <div>
            <p id="intro-signup" className="active">
              <strong>Cup o&apos; Tea</strong> is even better with&nbsp;an&nbsp;account.
            </p>
            <p id="intro-login">
              Welcome back to
              <br />
              <strong>Cup o&apos; Tea</strong>!
            </p>
          </div>
        </div>
      </aside>
      <section>
        <h1>
          <a id="link-signup" className="active">
            Sign Up
          </a>
          <a id="link-login">Log In</a>
        </h1>
        <form id="form-signup" className="active">
          <div>
            <fieldset>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Marcia Polo" />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email1" type="email" placeholder="marcia@polo.com" />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="••••••••" />
              </div>
            </fieldset>
          </div>
          <ul>
            <li>
              <button className="fb">Connect with Facebook</button>
            </li>
            <li>
              <button className="tw">Connect with Twitter</button>
            </li>
          </ul>
          <input type="submit" defaultValue="Sign Up" />
        </form>
        <form id="form-login">
          <div>
            <fieldset>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="marcia@polo.com" />
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="password">Password</label>
                <input id="password1" type="password" placeholder="••••••••" />
              </div>
            </fieldset>
          </div>
          <ul>
            <li>
              <button className="fb">Connect with Facebook</button>
            </li>
            <li>
              <button className="tw">Connect with Twitter</button>
            </li>
          </ul>
          <input type="submit" defaultValue="Log In" />
        </form>
      </section>
    </main>
    </div>
  )
}

export default SignUp