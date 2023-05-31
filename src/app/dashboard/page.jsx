const page = () => {
  return (
    <>
      {/* <!--*******************
        Preloader start
    ********************--> */}
      <div id="preloader">
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </div>
      {/* <!--*******************
        Preloader end
    ********************--> */}
      {/* <!--**********************************
        Main wrapper start
    ***********************************--> */}
      <div id="main-wrapper">
        {/* <!--**********************************
            Nav header start
        ***********************************--> */}
        <div className="nav-header">
          <a href="index.html" className="brand-logo">
            <svg
              className="logo-abbr"
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="51"
              fill="none"
            >
              <path
                className="svg-logo-pattern"
                d="M12.683 49.636c0 .488-.392.88-.877.88a.88.88 0 0 1-.88-.88v-6.827a.88.88 0 0 1 .88-.88.88.88 0 0 1 .877.88v6.827zm-11.757-10a.88.88 0 0 1-.88-.877.88.88 0 0 1 .88-.88h6.83a.88.88 0 0 1 .877.88c0 .485-.392.877-.877.877H.926zm0-26.999a.88.88 0 0 1-.88-.877.88.88 0 0 1 .88-.88h6.83c.485 0 .877.392.877.88s-.392.877-.877.877H.926zm0 6.751a.88.88 0 0 1-.88-.88.88.88 0 0 1 .88-.877h6.83c.485 0 .877.392.877.877s-.392.88-.877.88H.926zm0 6.751a.88.88 0 0 1-.88-.88.88.88 0 0 1 .88-.877h6.83c.485 0 .877.392.877.877a.88.88 0 0 1-.877.88H.926zm0 6.75a.88.88 0 1 1 0-1.761h6.83a.88.88 0 0 1 0 1.761H.926zM10.926.88a.88.88 0 0 1 .88-.88.88.88 0 0 1 .877.88v6.83c0 .485-.392.877-.877.877s-.88-.392-.88-.877V.88zm26.999 0a.88.88 0 0 1 .88-.88.88.88 0 0 1 .877.88v6.83c0 .485-.392.877-.877.877a.88.88 0 0 1-.88-.877V.88zm-6.751 0a.88.88 0 1 1 1.761 0v6.83a.88.88 0 1 1-1.761 0V.88zm-6.747 0a.88.88 0 0 1 .877-.88.88.88 0 0 1 .88.88v6.83a.88.88 0 0 1-.88.877c-.485 0-.877-.392-.877-.877V.88zm-6.751 0a.88.88 0 0 1 .877-.88.88.88 0 0 1 .88.88v6.83c0 .485-.392.877-.88.877s-.877-.392-.877-.877V.88zm32.005 36.998a.88.88 0 0 1 .881.88c0 .485-.392.877-.881.877h-6.827a.88.88 0 0 1-.88-.877.88.88 0 0 1 .88-.88h6.827zm0-26.999a.88.88 0 0 1 .881.88c0 .485-.392.877-.881.877h-6.827a.88.88 0 0 1-.88-.877.88.88 0 0 1 .88-.88h6.827zm0 6.751c.488 0 .881.392.881.877a.88.88 0 0 1-.881.88h-6.827a.88.88 0 0 1-.88-.88.88.88 0 0 1 .88-.877h6.827zm0 6.751c.488 0 .881.392.881.877a.88.88 0 0 1-.881.88h-6.827a.88.88 0 0 1-.88-.88.88.88 0 0 1 .88-.877h6.827zm0 6.747a.88.88 0 1 1 0 1.761h-6.827a.88.88 0 0 1 0-1.761h6.827zm-9.999 18.508c0 .488-.392.88-.877.88a.88.88 0 0 1-.88-.88v-6.827a.88.88 0 0 1 .88-.88.88.88 0 0 1 .877.88v6.827zm-6.747 0a.88.88 0 1 1-1.761 0v-6.827a.88.88 0 1 1 1.761 0v6.827zm-6.75 0a.88.88 0 0 1-.88.88c-.485 0-.877-.392-.877-.88v-6.827a.88.88 0 0 1 .877-.88.88.88 0 0 1 .88.88v6.827zm-6.75 0a.88.88 0 0 1-.88.88c-.485 0-.877-.392-.877-.88v-6.827a.88.88 0 0 1 .877-.88.88.88 0 0 1 .88.88v6.827z"
                fill="#363062"
              />
              <g fill-rule="evenodd">
                <path
                  className="svg-logo-path"
                  d="M11.806 7.711h26.999c2.226 0 4.05 1.821 4.05 4.05v26.999c0 2.226-1.824 4.05-4.05 4.05H11.806c-2.229 0-4.05-1.824-4.05-4.05V11.76a4.06 4.06 0 0 1 4.05-4.05z"
                  fill="#4d4c7d"
                />
                <path
                  className="svg-logo-path"
                  d="M35.287 7.711h3.518c2.226 0 4.05 1.821 4.05 4.05v26.999c0 2.226-1.824 4.05-4.05 4.05h-3.518c2.229 0 4.053-1.824 4.053-4.05V11.76c0-2.229-1.824-4.05-4.053-4.05z"
                  fill="#363062"
                />
                <path
                  className="svg-bg-path"
                  d="M14.733 13.75h21.142a.94.94 0 0 1 .937.937v21.142a.94.94 0 0 1-.937.937H14.733a.94.94 0 0 1-.937-.937V14.687a.94.94 0 0 1 .937-.937z"
                  fill="#fff"
                />
                <path
                  className="svg-bg-path"
                  d="M32.36 13.75h3.515a.94.94 0 0 1 .937.937v21.142a.94.94 0 0 1-.937.937H32.36a.94.94 0 0 0 .937-.937V14.687a.94.94 0 0 0-.937-.937z"
                  fill="#fff"
                />
              </g>
              <path
                className="svg-logo-path"
                d="M23.171 18.75v-1.153a.88.88 0 1 1 1.761 0v1.153h1.837v-1.153c0-.485.392-.877.88-.877s.877.392.877.877v1.259a3.75 3.75 0 0 1 1.741.977c.674.671 1.093 1.595 1.093 2.611a3.67 3.67 0 0 1-1.319 2.814c.834.701 1.319 1.724 1.319 2.817 0 1.013-.419 1.937-1.093 2.608-.475.472-1.073.817-1.741.98v1.256a.88.88 0 0 1-.877.88.88.88 0 0 1-.88-.88v-1.15h-1.837v1.15a.88.88 0 1 1-1.761 0v-1.15h-3.043a.88.88 0 0 1 0-1.761h.921v-9.501h-.921a.88.88 0 0 1-.88-.877.88.88 0 0 1 .88-.88h3.043zm4.478 7.388h-4.844v3.87h4.844c.538 0 1.026-.216 1.382-.568a1.92 1.92 0 0 0 .572-1.365 1.93 1.93 0 0 0-.572-1.369c-.355-.352-.844-.568-1.382-.568zm0-5.631h-4.844v3.874h4.844a1.96 1.96 0 0 0 1.382-.571 1.92 1.92 0 0 0 .572-1.366c0-.531-.219-1.017-.572-1.369a1.97 1.97 0 0 0-1.382-.568z"
                fill="#4d4c7d"
              />
            </svg>
            <svg
              className="brand-title"
              width="103"
              height="31"
              viewBox="0 0 103 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="svg-logo-title"
                d="M10.284 23L5.524 16.448V23H0.736V2.28H5.524V13.732L10.256 7.376H16.164L9.668 15.216L16.22 23H10.284ZM22.8326 9.98C23.3926 9.12133 24.0926 8.44933 24.9326 7.964C25.7726 7.46 26.7059 7.208 27.7326 7.208V12.276H26.4166C25.2219 12.276 24.3259 12.5373 23.7286 13.06C23.1313 13.564 22.8326 14.46 22.8326 15.748V23H18.0446V7.376H22.8326V9.98ZM32.4292 5.752C31.5892 5.752 30.8985 5.50933 30.3572 5.024C29.8345 4.52 29.5732 3.904 29.5732 3.176C29.5732 2.42933 29.8345 1.81333 30.3572 1.328C30.8985 0.823998 31.5892 0.571998 32.4292 0.571998C33.2505 0.571998 33.9225 0.823998 34.4452 1.328C34.9865 1.81333 35.2572 2.42933 35.2572 3.176C35.2572 3.904 34.9865 4.52 34.4452 5.024C33.9225 5.50933 33.2505 5.752 32.4292 5.752ZM34.8092 7.376V23H30.0212V7.376H34.8092ZM43.067 9.588C43.5336 8.86 44.1776 8.272 44.999 7.824C45.8203 7.376 46.7816 7.152 47.883 7.152C49.171 7.152 50.3376 7.47867 51.383 8.132C52.4283 8.78533 53.2496 9.71867 53.847 10.932C54.463 12.1453 54.771 13.5547 54.771 15.16C54.771 16.7653 54.463 18.184 53.847 19.416C53.2496 20.6293 52.4283 21.572 51.383 22.244C50.3376 22.8973 49.171 23.224 47.883 23.224C46.8003 23.224 45.839 23 44.999 22.552C44.1776 22.104 43.5336 21.5253 43.067 20.816V30.448H38.279V7.376H43.067V9.588ZM49.899 15.16C49.899 13.9653 49.563 13.032 48.891 12.36C48.2376 11.6693 47.4256 11.324 46.455 11.324C45.503 11.324 44.691 11.6693 44.019 12.36C43.3656 13.0507 43.039 13.9933 43.039 15.188C43.039 16.3827 43.3656 17.3253 44.019 18.016C44.691 18.7067 45.503 19.052 46.455 19.052C47.407 19.052 48.219 18.7067 48.891 18.016C49.563 17.3067 49.899 16.3547 49.899 15.16ZM65.9909 18.94V23H63.5549C61.8189 23 60.4655 22.58 59.4949 21.74C58.5242 20.8813 58.0389 19.4907 58.0389 17.568V11.352H56.1349V7.376H58.0389V3.568H62.8269V7.376H65.9629V11.352H62.8269V17.624C62.8269 18.0907 62.9389 18.4267 63.1629 18.632C63.3869 18.8373 63.7602 18.94 64.2829 18.94H65.9909ZM75.7699 23.224C74.2392 23.224 72.8579 22.8973 71.6259 22.244C70.4125 21.5907 69.4512 20.6573 68.7419 19.444C68.0512 18.2307 67.7059 16.812 67.7059 15.188C67.7059 13.5827 68.0605 12.1733 68.7699 10.96C69.4792 9.728 70.4499 8.78533 71.6819 8.132C72.9139 7.47867 74.2952 7.152 75.8259 7.152C77.3565 7.152 78.7379 7.47867 79.9699 8.132C81.2019 8.78533 82.1725 9.728 82.8819 10.96C83.5912 12.1733 83.9459 13.5827 83.9459 15.188C83.9459 16.7933 83.5819 18.212 82.8539 19.444C82.1445 20.6573 81.1645 21.5907 79.9139 22.244C78.6819 22.8973 77.3005 23.224 75.7699 23.224ZM75.7699 19.08C76.6845 19.08 77.4592 18.744 78.0939 18.072C78.7472 17.4 79.0739 16.4387 79.0739 15.188C79.0739 13.9373 78.7565 12.976 78.1219 12.304C77.5059 11.632 76.7405 11.296 75.8259 11.296C74.8925 11.296 74.1179 11.632 73.5019 12.304C72.8859 12.9573 72.5779 13.9187 72.5779 15.188C72.5779 16.4387 72.8765 17.4 73.4739 18.072C74.0899 18.744 74.8552 19.08 75.7699 19.08ZM96.006 7.208C97.8353 7.208 99.2913 7.80533 100.374 9C101.475 10.176 102.026 11.8 102.026 13.872V23H97.266V14.516C97.266 13.4707 96.9953 12.6587 96.454 12.08C95.9127 11.5013 95.1847 11.212 94.27 11.212C93.3553 11.212 92.6273 11.5013 92.086 12.08C91.5447 12.6587 91.274 13.4707 91.274 14.516V23H86.486V7.376H91.274V9.448C91.7593 8.75733 92.4127 8.216 93.234 7.824C94.0553 7.41333 94.9793 7.208 96.006 7.208Z"
                fill="#363062"
              />
            </svg>
          </a>

          <div className="nav-control">
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        {/* <!--**********************************
            Nav header end
        ***********************************--> */}

        {/* <!--**********************************
            Chat box start
        ***********************************--> */}
        <div className="chatbox">
          <div className="chatbox-close"></div>
          <div className="custom-tab-1">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#notes">
                  Notes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#alerts">
                  Alerts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#chat">
                  Chat
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="chat" role="tabpanel">
                <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                  <div className="card-header chat-list-header text-center">
                    <a href="#">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            fill="#000000"
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            rx="1"
                          />
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            rx="1"
                          />
                        </g>
                      </svg> */}
                    </a>
                    <div>
                      <h6 className="mb-1">Chat List</h6>
                      <p className="mb-0">Show All</p>
                    </div>
                    <a href="#">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="#000000" cx="5" cy="12" r="2" />
                          <circle fill="#000000" cx="12" cy="12" r="2" />
                          <circle fill="#000000" cx="19" cy="12" r="2" />
                        </g>
                      </svg> */}
                    </a>
                  </div>
                  <div
                    className="card-body contacts_body p-0 dz-scroll  "
                    id="DZ_W_Contacts_Body"
                  >
                    <ul className="contacts">
                      <li className="name-first-letter">A</li>
                      <li className="active dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/1.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon"></span>
                          </div>
                          <div className="user_info">
                            <span>Archie Parker</span>
                            <p>Kalid is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/2.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Alfie Mason</span>
                            <p>Taherah left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/3.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon"></span>
                          </div>
                          <div className="user_info">
                            <span>AharlieKane</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/4.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Athan Jacoby</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">B</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/5.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Bashid Samim</span>
                            <p>Rashid left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/1.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon"></span>
                          </div>
                          <div className="user_info">
                            <span>Breddie Ronan</span>
                            <p>Kalid is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/2.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Ceorge Carson</span>
                            <p>Taherah left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">D</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/3.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon"></span>
                          </div>
                          <div className="user_info">
                            <span>Darry Parker</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/4.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Denry Hunter</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">J</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/5.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Jack Ronan</span>
                            <p>Rashid left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/1.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon"></span>
                          </div>
                          <div className="user_info">
                            <span>Jacob Tucker</span>
                            <p>Kalid is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/2.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>James Logan</span>
                            <p>Taherah left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/3.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon"></span>
                          </div>
                          <div className="user_info">
                            <span>Joshua Weston</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">O</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/4.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Oliver Acker</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/5.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline"></span>
                          </div>
                          <div className="user_info">
                            <span>Oscar Weston</span>
                            <p>Rashid left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card chat dz-chat-history-box d-none">
                  <div className="card-header chat-list-header text-center">
                    <a href="#" className="dz-chat-history-back">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                            x="14"
                            y="7"
                            width="2"
                            height="10"
                            rx="1"
                          />
                          <path
                            d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                          />
                        </g>
                      </svg> */}
                    </a>
                    <div>
                      <h6 className="mb-1">Chat with Khelesh</h6>
                      <p className="mb-0 text-success">Online</p>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {/* <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <circle fill="#000000" cx="5" cy="12" r="2" />
                            <circle fill="#000000" cx="12" cy="12" r="2" />
                            <circle fill="#000000" cx="19" cy="12" r="2" />
                          </g>
                        </svg> */}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item">
                          <i className="fa fa-user-circle text-primary me-2"></i>{" "}
                          View profile
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-users text-primary me-2"></i> Add to
                          close friends
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-plus text-primary me-2"></i> Add to
                          group
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-ban text-primary me-2"></i> Block
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-body msg_card_body dz-scroll"
                    id="DZ_W_Contacts_Body3"
                  >
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Hi, how are you samim?
                        <span className="msg_time">8:40 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Hi Khalid i am good tnx how about you?
                        <span className="msg_time_send">8:55 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am good too, thank you for your chat template
                        <span className="msg_time">9:00 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        You are welcome
                        <span className="msg_time_send">9:05 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am looking for your next templates
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Ok, thank you have a good day
                        <span className="msg_time_send">9:10 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Bye, see you
                        <span className="msg_time">9:12 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Hi, how are you samim?
                        <span className="msg_time">8:40 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Hi Khalid i am good tnx how about you?
                        <span className="msg_time_send">8:55 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am good too, thank you for your chat template
                        <span className="msg_time">9:00 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        You are welcome
                        <span className="msg_time_send">9:05 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am looking for your next templates
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Ok, thank you have a good day
                        <span className="msg_time_send">9:10 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Bye, see you
                        <span className="msg_time">9:12 AM, Today</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer type_msg">
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        placeholder="Type your message..."
                      ></textarea>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-primary">
                          <i className="fa fa-location-arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="alerts" role="tabpanel">
                <div className="card mb-sm-3 mb-md-0 contacts_card">
                  <div className="card-header chat-list-header text-center">
                    <a href="#">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="#000000" cx="5" cy="12" r="2" />
                          <circle fill="#000000" cx="12" cy="12" r="2" />
                          <circle fill="#000000" cx="19" cy="12" r="2" />
                        </g>
                      </svg> */}
                    </a>
                    <div>
                      <h6 className="mb-1">Notications</h6>
                      <p className="mb-0">Show All</p>
                    </div>
                    <a href="#">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <path
                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          />
                        </g>
                      </svg> */}
                    </a>
                  </div>
                  <div
                    className="card-body contacts_body p-0 dz-scroll"
                    id="DZ_W_Contacts_Body1"
                  >
                    <ul className="contacts">
                      <li className="name-first-letter">SEVER STATUS</li>
                      <li className="active">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont primary">KK</div>
                          <div className="user_info">
                            <span>David Nester Birthday</span>
                            <p className="text-primary">Today</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">SOCIAL</li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont success">RU</div>
                          <div className="user_info">
                            <span>Perfection Simplified</span>
                            <p>Jame Smith commented on your status</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">SEVER STATUS</li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont primary">AU</div>
                          <div className="user_info">
                            <span>AharlieKane</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont info">MO</div>
                          <div className="user_info">
                            <span>Athan Jacoby</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer"></div>
                </div>
              </div>
              <div className="tab-pane fade" id="notes">
                <div className="card mb-sm-3 mb-md-0 note_card">
                  <div className="card-header chat-list-header text-center">
                    <a href="#">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            fill="#000000"
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            rx="1"
                          />
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            rx="1"
                          />
                        </g>
                      </svg> */}
                    </a>
                    <div>
                      <h6 className="mb-1">Notes</h6>
                      <p className="mb-0">Add New Nots</p>
                    </div>
                    <a href="#">
                      {/* <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <path
                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          />
                        </g>
                      </svg> */}
                    </a>
                  </div>
                  <div
                    className="card-body contacts_body p-0 dz-scroll"
                    id="DZ_W_Contacts_Body2"
                  >
                    <ul className="contacts">
                      <li className="active">
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>New order placed..</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="#"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>Youtube, a video-sharing website..</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="#"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>john just buy your product..</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="#"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>Athan Jacoby</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="#"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--**********************************
            Chat box End
        ***********************************--> */}

        {/* <!--**********************************
            Header start
        ***********************************--> */}
        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">Dashboard</div>
                </div>

                <ul className="navbar-nav header-right">
                  <li className="nav-item">
                    <div className="input-group search-area d-xl-inline-flex d-none">
                      <div className="input-group-append">
                        <button className="input-group-text">
                          <i className="flaticon-381-search-2"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here..."
                      />
                    </div>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a
                      className="nav-link  ai-icon"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="flaticon-381-ring"></i>
                      <div className="pulse-css"></div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div
                        id="DZ_W_Notification1"
                        className="widget-media dz-scroll p-3"
                        style={{ height: "380px" }}
                      >
                        <ul className="timeline">
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2">
                                <img
                                  alt="image"
                                  width="50"
                                  src="images/avatar/1.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-info">KG</div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Resport created successfully
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-success">
                                <i className="fa fa-home"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2">
                                <img
                                  alt="image"
                                  width="50"
                                  src="images/avatar/1.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-danger">KG</div>
                              <div className="media-body">
                                <h6 className="mb-1">
                                  Resport created successfully
                                </h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel">
                              <div className="media me-2 media-primary">
                                <i className="fa fa-home"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                <small className="d-block">
                                  29 July 2020 - 02:26 PM
                                </small>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <a className="all-notification" href="#">
                        See all notifications <i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a className="nav-link bell bell-link" href="#">
                      <i className="flaticon-381-pad"></i>
                      <div className="pulse-css"></div>
                    </a>
                  </li>
                  <li className="nav-item dropdown notification_dropdown">
                    <a className="nav-link" href="#" data-bs-toggle="dropdown">
                      <i className="flaticon-381-gift"></i>
                      <div className="pulse-css"></div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div
                        id="DZ_W_TimeLine02"
                        className="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370"
                      >
                        <ul className="timeline">
                          <li>
                            <div className="timeline-badge primary"></div>
                            <a className="timeline-panel text-muted" href="#">
                              <span>10 minutes ago</span>
                              <h6 className="mb-0">
                                Youtube, a video-sharing website, goes live{" "}
                                <strong className="text-primary">$500</strong>.
                              </h6>
                            </a>
                          </li>
                          <li>
                            <div className="timeline-badge info"></div>
                            <a className="timeline-panel text-muted" href="#">
                              <span>20 minutes ago</span>
                              <h6 className="mb-0">
                                New order placed{" "}
                                <strong className="text-info">#XF-2356.</strong>
                              </h6>
                              <p className="mb-0">
                                Quisque a consequat ante Sit amet magna at
                                volutapt...
                              </p>
                            </a>
                          </li>
                          <li>
                            <div className="timeline-badge danger"></div>
                            <a className="timeline-panel text-muted" href="#">
                              <span>30 minutes ago</span>
                              <h6 className="mb-0">
                                john just buy your product{" "}
                                <strong className="text-warning">Sell $250</strong>
                              </h6>
                            </a>
                          </li>
                          <li>
                            <div className="timeline-badge success"></div>
                            <a className="timeline-panel text-muted" href="#">
                              <span>15 minutes ago</span>
                              <h6 className="mb-0">
                                StumbleUpon is acquired by eBay.{" "}
                              </h6>
                            </a>
                          </li>
                          <li>
                            <div className="timeline-badge warning"></div>
                            <a className="timeline-panel text-muted" href="#">
                              <span>20 minutes ago</span>
                              <h6 className="mb-0">
                                Mashable, a news website and blog, goes live.
                              </h6>
                            </a>
                          </li>
                          <li>
                            <div className="timeline-badge dark"></div>
                            <a className="timeline-panel text-muted" href="#">
                              <span>20 minutes ago</span>
                              <h6 className="mb-0">
                                Mashable, a news website and blog, goes live.
                              </h6>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown header-profile">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <img src="images/profile/pic1.jpg" width="20" alt="" />
                      <div className="header-info">
                        <span>Johndoe</span>
                        <small>Super Admin</small>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="app-profile.html" className="dropdown-item ai-icon">
                        <svg
                          id="icon-user1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="ms-2">Profile </span>
                      </a>
                      <a href="email-inbox.html" className="dropdown-item ai-icon">
                        <svg
                          id="icon-inbox"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-success"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span className="ms-2">Inbox </span>
                      </a>
                      <a href="page-login.html" className="dropdown-item ai-icon">
                        <svg
                          id="icon-logout"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-danger"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        <span className="ms-2">Logout </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* <!--**********************************
            Header end ti-comment-alt
        ***********************************--> */}

        {/* <!--**********************************
            Sidebar start
        ***********************************--> */}
        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-networking"></i>
                  <span className="nav-text">Dashboard</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="index.html">Dashboard &nbsp; 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Dashboard &nbsp; 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Dashboard &nbsp; 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Dashboard Dark</a>
                  </li>
                  <li>
                    <a href="coin-details.html">Coin Details</a>
                  </li>
                  <li>
                    <a href="my-wallets.html">My Wallets</a>
                  </li>
                  <li>
                    <a href="transactions.html">Transactions</a>
                  </li>
                  <li>
                    <a href="portofolio.html">Portofolio</a>
                  </li>
                  <li>
                    <a href="market-capital.html">Market Capital</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-television"></i>
                  <span className="nav-text">Apps</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="app-profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="post-details.html">Post Details</a>
                  </li>
                  <li>
                    <a
                      className="has-arrow"
                      href="javascript:void()"
                      aria-expanded="false"
                    >
                      Email
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <a href="email-compose.html">Compose</a>
                      </li>
                      <li>
                        <a href="email-inbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="email-read.html">Read</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="app-calender.html">Calendar</a>
                  </li>
                  <li>
                    <a
                      className="has-arrow"
                      href="javascript:void()"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <a href="ecom-product-grid.html">Product Grid</a>
                      </li>
                      <li>
                        <a href="ecom-product-list.html">Product List</a>
                      </li>
                      <li>
                        <a href="ecom-product-detail.html">Product Details</a>
                      </li>
                      <li>
                        <a href="ecom-product-order.html">Order</a>
                      </li>
                      <li>
                        <a href="ecom-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="ecom-invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="ecom-customers.html">Customers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-controls-3"></i>
                  <span className="nav-text">Charts</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="chart-flot.html">Flot</a>
                  </li>
                  <li>
                    <a href="chart-morris.html">Morris</a>
                  </li>
                  <li>
                    <a href="chart-chartjs.html">Chartjs</a>
                  </li>
                  <li>
                    <a href="chart-chartist.html">Chartist</a>
                  </li>
                  <li>
                    <a href="chart-sparkline.html">Sparkline</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-internet"></i>
                  <span className="nav-text">Bootstrap</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="ui-accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="ui-alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="ui-badge.html">Badge</a>
                  </li>
                  <li>
                    <a href="ui-button.html">Button</a>
                  </li>
                  <li>
                    <a href="ui-modal.html">Modal</a>
                  </li>
                  <li>
                    <a href="ui-button-group.html">Button Group</a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">List Group</a>
                  </li>
                  <li>
                    <a href="ui-media-object.html">Media Object</a>
                  </li>
                  <li>
                    <a href="ui-card.html">Cards</a>
                  </li>
                  <li>
                    <a href="ui-carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="ui-dropdown.html">Dropdown</a>
                  </li>
                  <li>
                    <a href="ui-popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="ui-progressbar.html">Progressbar</a>
                  </li>
                  <li>
                    <a href="ui-tab.html">Tab</a>
                  </li>
                  <li>
                    <a href="ui-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="ui-pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="ui-grid.html">Grid</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-heart"></i>
                  <span className="nav-text">Plugins</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="uc-select2.html">Select 2</a>
                  </li>
                  <li>
                    <a href="uc-nestable.html">Nestedable</a>
                  </li>
                  <li>
                    <a href="uc-noui-slider.html">Noui Slider</a>
                  </li>
                  <li>
                    <a href="uc-sweetalert.html">Sweet Alert</a>
                  </li>
                  <li>
                    <a href="uc-toastr.html">Toastr</a>
                  </li>
                  <li>
                    <a href="map-jqvmap.html">Jqv Map</a>
                  </li>
                  <li>
                    <a href="uc-lightgallery.html">Light Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="widget-basic.html"
                  className="ai-icon"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-settings-2"></i>
                  <span className="nav-text">Widget</span>
                </a>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-notepad"></i>
                  <span className="nav-text">Forms</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="form-element.html">Form Elements</a>
                  </li>
                  <li>
                    <a href="form-wizard.html">Wizard</a>
                  </li>
                  <li>
                    <a href="form-editor-summernote.html">Summernote</a>
                  </li>
                  <li>
                    <a href="form-pickers.html">Pickers</a>
                  </li>
                  <li>
                    <a href="form-validation-jquery.html">Jquery Validate</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-network"></i>
                  <span className="nav-text">Table</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="table-bootstrap-basic.html">Bootstrap</a>
                  </li>
                  <li>
                    <a href="table-datatable-basic.html">Datatable</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-layer-1"></i>
                  <span className="nav-text">Pages</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <a
                      className="has-arrow"
                      href="javascript:void()"
                      aria-expanded="false"
                    >
                      Error
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <a href="page-error-400.html">Error 400</a>
                      </li>
                      <li>
                        <a href="page-error-403.html">Error 403</a>
                      </li>
                      <li>
                        <a href="page-error-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="page-error-500.html">Error 500</a>
                      </li>
                      <li>
                        <a href="page-error-503.html">Error 503</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-lock-screen.html">Lock Screen</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="book-box">
              <img src="images/book.png" alt="" />
              <a href="javascript:void(0);">Generate Report </a>
            </div>
            <div className="copyright">
              <p>
                <strong>Kripton Crypto Admin Dashboard</strong> © 2022 All
                Rights Reserved
              </p>
              <p className="fs-12">
                Made with <span className="heart"></span> by DexignZone
              </p>
            </div>
          </div>
        </div>
        {/* <!--**********************************
            Sidebar end
        ***********************************--> */}

        {/* <!--**********************************
            Content body start
        ***********************************--> */}
        <div className="content-body">
          {/* <!-- row --> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-sm-6">
                <div className="card overflow-hidden">
                  <div className="card-header align-items-start border-0 pb-0">
                    <div className="me-auto">
                      <p className="mb-2 fs-13">
                        <i
                          className="fa fa-caret-up scale5 me-2 text-success"
                          aria-hidden="true"
                        ></i>
                        4%(30 days)
                      </p>
                      <h2 className="text-black mb-0 font-w600">$65,123</h2>
                    </div>
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z"
                        fill="#FFAB2D"
                      />
                      <path
                        d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.157 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z"
                        fill="#FFAB2D"
                      />
                      <path
                        d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9866 9.40762 32.5924 0.0133972 21 0.00012207ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4998V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1716 34.4999 22.5001 33.8284 22.5001 32.9998V31.4998H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1717 34.4999 16.5002 33.8284 16.5002 32.9998V31.4998H12.0004C11.1718 31.4998 10.5003 30.8282 10.5003 30.0001C10.5003 29.1716 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00021C16.5002 8.17166 17.1717 7.50012 18.0003 7.50012C18.8288 7.50012 19.5004 8.17166 19.5004 9.00021V10.4998H22.5001V9.00021C22.5001 8.17166 23.1716 7.50012 24.0002 7.50012C24.8287 7.50012 25.5003 8.17166 25.5003 9.00021V10.4998C28.7998 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7375 22.128 31.4942 23.77 31.5002 25.4998Z"
                        fill="#FFAB2D"
                      />
                    </svg>
                  </div>
                  <div className="card-body p-0">
                    <canvas id="widgetChart" className="max-h80 mt-auto"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card overflow-hidden">
                  <div className="card-header align-items-start border-0 pb-0">
                    <div className="me-auto">
                      <p className="mb-2 fs-13">
                        <i
                          className="fa fa-caret-down scale5 me-2 text-danger"
                          aria-hidden="true"
                        ></i>
                        4%(30 days)
                      </p>
                      <h2 className="text-black mb-0 font-w600">$65,123</h2>
                    </div>
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1715 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1715 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7772C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6715 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0009 31.1715 14.01 31.1711 16.4883C31.1711 16.7827 31.1418 17.0765 31.0841 17.3658Z"
                        fill="#3693FF"
                      />
                    </svg>
                  </div>
                  <div className="card-body p-0">
                    <canvas id="widgetChart2" className="max-h80 mt-auto"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card overflow-hidden">
                  <div className="card-header align-items-start border-0 pb-0">
                    <div className="me-auto">
                      <p className="mb-2 fs-13">
                        <i
                          className="fa fa-caret-down scale5 me-2 text-danger"
                          aria-hidden="true"
                        ></i>
                        4%(30 days)
                      </p>
                      <h2 className="text-black mb-0 font-w600">$65,123</h2>
                    </div>
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM26.9999 30.0001H22.5001V34.4999C22.5001 35.3285 21.8286 36 21 36C20.1714 36 19.4999 35.3285 19.4999 34.4999V30.0001H15.0001C14.1715 30.0006 13.4995 29.3295 13.4991 28.5009C13.4991 28.1599 13.6149 27.8289 13.8282 27.5625L23.8784 15.0001H15.0001C14.1715 15.0001 13.5 14.3286 13.5 13.5C13.5 12.6715 14.1715 11.9999 15.0001 11.9999H19.4999V7.50012C19.4999 6.67157 20.1714 6.00003 21 6.00003C21.8286 6.00003 22.5001 6.67203 22.5001 7.50012V11.9999H26.9999C27.8294 12.0013 28.5005 12.6747 28.4995 13.5037C28.4991 13.8429 28.3833 14.1725 28.1718 14.4375L18.1216 26.9999H26.9999C27.8285 26.9999 28.5 27.6719 28.5 28.5C28.5 29.3286 27.8285 30.0001 26.9999 30.0001Z"
                        fill="#5B5D81"
                      />
                    </svg>
                  </div>
                  <div className="card-body p-0">
                    <canvas id="widgetChart3" className="max-h80 mt-auto"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card overflow-hidden">
                  <div className="card-header align-items-start border-0 pb-0">
                    <div className="me-auto">
                      <p className="mb-2 fs-13">
                        <i
                          className="fa fa-caret-up scale5 me-2 text-success"
                          aria-hidden="true"
                        ></i>
                        4%(30 days)
                      </p>
                      <h2 className="text-black mb-0 font-w600">$65,123</h2>
                    </div>
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5566 23.893C21.1991 24.0359 20.8009 24.0359 20.4434 23.893L16.6064 22.3582L21 31.1454L25.3936 22.3582L21.5566 23.893Z"
                        fill="#AC4CBC"
                      />
                      <path
                        d="M21 20.8846L26.2771 18.7739L21 10.3304L15.7229 18.7739L21 20.8846Z"
                        fill="#AC4CBC"
                      />
                      <path
                        d="M21 0.00012207C9.40213 0.00012207 0.00012207 9.40213 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM29.8417 20.171L22.3417 35.171C21.9714 35.9121 21.0701 36.2124 20.3294 35.8421C20.0387 35.697 19.8034 35.4617 19.6583 35.171L12.1583 20.171C11.9253 19.7032 11.9519 19.1479 12.2284 18.7043L19.7284 6.70453C20.2269 6.00232 21.1996 5.83661 21.9018 6.33511C22.0451 6.43674 22.1701 6.56125 22.2717 6.70453L29.7712 18.7043C30.0482 19.1479 30.0747 19.7032 29.8417 20.171Z"
                        fill="#AC4CBC"
                      />
                    </svg>
                  </div>
                  <div className="card-body p-0">
                    <canvas id="widgetChart4" className="max-h80 mt-auto"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="card">
                  <div className="card-header d-block d-sm-flex border-0">
                    <div>
                      <h4 className="fs-20 text-black">Market Overview</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <div className="card-action card-tabs mt-3 mt-sm-0">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#Week"
                            role="tab"
                          >
                            Week
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#Month"
                            role="tab"
                          >
                            Month
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#Year"
                            role="tab"
                          >
                            Year
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pb-0 pt-sm-3 pt-0 tab-content">
                    <div className="tab-pane fade active show" id="Month">
                      <div className="row">
                        <div className="d-flex col-6 align-items-center">
                          <div className="fs-18 font-w600 me-3">
                            <span className="text-success pe-3">BUY</span>
                            <span className="text-black pe-3">$5,673</span>
                          </div>
                          <div className="fs-18 font-w600 ms-auto">
                            <span className="text-danger pe-3">SELL</span>
                            <span className="text-black pe-3">$5,982</span>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-primary light btn-rounded"
                          >
                            <i className="las la-download scale5 me-2"></i>Get
                            Report
                          </a>
                        </div>
                      </div>
                      <div id="chartBarRunning" className="bar-chart"></div>
                    </div>
                    <div className="tab-pane fade" id="Week">
                      <div className="row">
                        <div className="d-flex col-6 align-items-center">
                          <div className="fs-18 font-w600 me-3">
                            <span className="text-success pe-3">BUY</span>
                            <span className="text-black pe-3">$3,472</span>
                          </div>
                          <div className="fs-18 font-w600 ms-auto">
                            <span className="text-danger pe-3">SELL</span>
                            <span className="text-black pe-3">$6,542</span>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-primary light btn-rounded"
                          >
                            <i className="las la-download scale5 me-2"></i>Get
                            Report
                          </a>
                        </div>
                      </div>
                      <div id="chartBarRunning2" className="bar-chart"></div>
                    </div>
                    <div className="tab-pane fade" id="Year">
                      <div className="row">
                        <div className="d-flex col-6 align-items-center">
                          <div className="fs-18 font-w600 me-3">
                            <span className="text-success pe-3">BUY</span>
                            <span className="text-black pe-3">$1,343</span>
                          </div>
                          <div className="fs-18 font-w600 ms-auto">
                            <span className="text-danger pe-3">SELL</span>
                            <span className="text-black pe-3">$3,482</span>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-primary light btn-rounded"
                          >
                            <i className="las la-download scale5 me-2"></i>Get
                            Report
                          </a>
                        </div>
                      </div>
                      <div id="chartBarRunning3" className="bar-chart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                    <div>
                      <h4 className="fs-20 text-black">Crypto Statistics</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <div className="d-flex mt-sm-0 mt-3">
                      <div className="form-check form-switch text-end me-4 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch11"
                        />
                        <label
                          className="form-check-label fs-14 text-black pe-2"
                          for="customSwitch11"
                        >
                          Date
                        </label>
                      </div>
                      <div className="form-check form-switch text-end me-4 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch12"
                        />
                        <label
                          className="form-check-label fs-14 text-black pe-2"
                          for="customSwitch12"
                        >
                          Value
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="d-flex flex-wrap crypto">
                      <div className="form-check custom-checkbox me-5 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck9"
                        />
                        <label className="form-check-label" for="customCheck9">
                          <span className="d-block text-black font-w500">
                            Bitcoin
                          </span>
                          <span className="fs-12">BTC</span>
                        </label>
                      </div>
                      <div className="form-check custom-checkbox me-5 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck91"
                        />
                        <label className="form-check-label" for="customCheck91">
                          <span className="d-block text-black font-w500">
                            Ripple
                          </span>
                          <span className="fs-12">XRP</span>
                        </label>
                      </div>
                      <div className="form-check custom-checkbox me-5 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck92"
                        />
                        <label className="form-check-label" for="customCheck92">
                          <span className="d-block text-black font-w500">
                            Ethereum
                          </span>
                          <span className="fs-12">ETH</span>
                        </label>
                      </div>
                      <div className="form-check custom-checkbox me-5 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck93"
                        />
                        <label className="form-check-label" for="customCheck93">
                          <span className="d-block text-black font-w500">
                            Zcash
                          </span>
                          <span className="fs-12">ZEC</span>
                        </label>
                      </div>
                      <div className="form-check custom-checkbox me-4 mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck94"
                        />
                        <label className="form-check-label" for="customCheck94">
                          <span className="d-block text-black font-w500">
                            LiteCoin
                          </span>
                          <span className="fs-12">LTC</span>
                        </label>
                      </div>
                    </div>
                    <div id="lineChart"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header d-sm-flex d-block pb-0 border-0">
                        <div>
                          <h4 className="fs-20 text-black">Quick Transfer</h4>
                          <p className="mb-0 fs-12">
                            Lorem ipsum dolor sit amet, consectetur
                          </p>
                        </div>
                        <select className="form-control custom-image-select-1 image-select mt-3 mt-sm-0">
                          <option data-thumbnail="images/svg/eth.svg">
                            23,511 ETH
                          </option>
                          <option data-thumbnail="images/svg/lit3.svg">
                            345,455 ETH
                          </option>
                          <option data-thumbnail="images/svg/btc.svg">
                            789,123 ETH
                          </option>
                        </select>
                      </div>
                      <div className="card-body">
                        <div className="d-flex mb-3 justify-content-between align-items-center">
                          <h4 className="text-black fs-20 mb-0">Recent Contacts</h4>
                          <a href="javascript:void(0);" className="btn-link">
                            View more
                          </a>
                        </div>
                        <div className="testimonial-one px-4 owl-right-nav owl-carousel owl-loaded owl-drag">
                          <div className="items">
                            <div className="text-center">
                              <img
                                className="mb-3 rounded"
                                src="images/contacts/1.jpg"
                                alt=""
                              />
                              <h5 className="text-black mb-0">Samuel</h5>
                              <span className="fs-12">@sam224</span>
                            </div>
                          </div>
                          <div className="items">
                            <div className="text-center">
                              <img
                                className="mb-3 rounded"
                                src="images/contacts/2.jpg"
                                alt=""
                              />
                              <h5 className="text-black mb-0">Cindy</h5>
                              <span className="fs-12">@cindyss</span>
                            </div>
                          </div>
                          <div className="items">
                            <div className="text-center">
                              <img
                                className="mb-3 rounded"
                                src="images/contacts/3.jpg"
                                alt=""
                              />
                              <h5 className="text-black mb-0">David</h5>
                              <span className="fs-12">@davidxc</span>
                            </div>
                          </div>
                          <div className="items">
                            <div className="text-center">
                              <img
                                className="mb-3 rounded"
                                src="images/contacts/4.jpg"
                                alt=""
                              />
                              <h5 className="text-black mb-0">Martha</h5>
                              <span className="fs-12">@marthaa</span>
                            </div>
                          </div>
                          <div className="items">
                            <div className="text-center">
                              <img
                                className="mb-3 rounded"
                                src="images/contacts/5.jpg"
                                alt=""
                              />
                              <h5 className="text-black mb-0">Olivia</h5>
                              <span className="fs-12">@oliv62</span>
                            </div>
                          </div>
                        </div>
                        <div className="amount-bx">
                          <label>Amount ETH</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="8,621.22"
                          />
                        </div>
                        <a
                          href="javascript:(0);"
                          className="btn btn-primary d-block btn-lg text-uppercase"
                        >
                          Send Money
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                        <div className="dropdown ms-auto">
                          <div className="btn-link" data-bs-toggle="dropdown">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="5"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="19"
                                  r="2"
                                ></circle>
                              </g>
                            </svg>
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <select className="form-control custom-image-select-2 image-select mt-3 mt-sm-0">
                          <option data-thumbnail="images/svg/coin.svg">
                            Dash Coin
                          </option>
                          <option data-thumbnail="images/svg/btc.svg">
                            Ripple
                          </option>
                          <option data-thumbnail="images/svg/eth.svg">
                            Ethereum
                          </option>
                          <option data-thumbnail="images/svg/btc.svg">
                            Bitcoin
                          </option>
                        </select>
                        <div className="table-responsive">
                          <table className="table text-center bg-info-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-end">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-end">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-end">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-end">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-end">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-end">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-end">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-end">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-end">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <a href="coin-details.html" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ms-2 scale-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                        <div className="dropdown ms-auto">
                          <div className="btn-link" data-bs-toggle="dropdown">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="5"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="12"
                                  r="2"
                                ></circle>
                                <circle
                                  fill="#000000"
                                  cx="12"
                                  cy="19"
                                  r="2"
                                ></circle>
                              </g>
                            </svg>
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <select className="form-control custom-image-select-2 image-select mt-3 mt-sm-0">
                          <option data-thumbnail="images/svg/btc.svg">
                            Bitcoin
                          </option>
                          <option data-thumbnail="images/svg/lit3.svg">
                            Litecoin
                          </option>
                          <option data-thumbnail="images/svg/btc.svg">
                            Ripple
                          </option>
                          <option data-thumbnail="images/svg/eth.svg">
                            Ethereum
                          </option>
                        </select>
                        <div className="table-responsive">
                          <table className="table text-center bg-warning-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-end">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-end">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-end">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-end">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-end">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-end">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-end">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-end">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-end">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <a href="coin-details.html" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ms-2 scale-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--**********************************
            Content body end
        ***********************************--> */}

        {/* <!--**********************************
            Footer start
        ***********************************--> */}
        <div className="footer">
          <div className="copyright">
            <p>
              Copyright © Designed &amp; Developed by{" "}
              <a href="http://dexignzone.com/" target="_blank">
                DexignZone
              </a>{" "}
              2023
            </p>
          </div>
        </div>
        {/* <!--**********************************
            Footer end
        ***********************************--> */}

        {/* <!--**********************************
           Support ticket button start
        ***********************************--> */}

        {/* <!--**********************************
           Support ticket button end
        ***********************************--> */}
      </div>
      {/* <!--**********************************
        Main wrapper end
    ***********************************--> */}
    </>
  );
};

export default page;
