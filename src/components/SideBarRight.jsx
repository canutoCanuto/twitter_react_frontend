import React from "react";

function SideBarRight() {
  return (
    <>
      <div className="sticky-top bg-black pb-2 pt-2 d-none d-lg-block">
        <div className="div-container p-3 rounded-pill bg-dark w-100">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="logo2">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <input
            type="search "
            className="w-100 sinborde bg-dark text-white ms-3"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mt-2 mb-3 d-none d-lg-block">
        <div className="card w-100 bg-dark">
          <div className="">
            <div className="d-flex justify-content-between align-items-center mt-1 mx-3">
              <div>
                <h5 className="card-title text-white">Trends for you</h5>
              </div>
              <div className="icon-container">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="logo2">
                  <g>
                    <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path>
                    <path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="m-0 fondo-hover">
              <div className="px-3 py-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="card-text text-muted m-0">
                      <small>Ucrania - Trending</small>
                    </p>
                  </div>
                  <div className="icon-container">
                    <div
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="More"
                      role="button"
                      tabindex="0"
                      className=""
                      data-testid="caret"
                    >
                      <div dir="ltr" className="">
                        <div className="css-1dbjc4n r-xoduu5">
                          <div className=""></div>
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="logo2"
                          >
                            <g>
                              <circle cx="5" cy="12" r="2"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                              <circle cx="19" cy="12" r="2"></circle>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="card-subtitle mb-1 mt-1 text-white">
                  Tercera guerra?
                </h6>
                <p className="card-text text-muted">
                  <small>180M Tweets</small>
                </p>
              </div>
            </div>
            <div className="m-0 fondo-hover">
              <div className="px-3 py-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="card-text text-muted m-0">
                      <small>Uruguay - Trending</small>
                    </p>
                  </div>
                  <div className="icon-container">
                    <div
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="More"
                      role="button"
                      tabindex="0"
                      className=""
                      data-testid="caret"
                    >
                      <div dir="ltr" className="">
                        <div className="css-1dbjc4n r-xoduu5">
                          <div className=""></div>
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="logo2"
                          >
                            <g>
                              <circle cx="5" cy="12" r="2"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                              <circle cx="19" cy="12" r="2"></circle>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="card-subtitle mb-1 mt-1 text-white">
                  Sale la LUC?
                </h6>
                <p className="card-text text-muted">
                  <small>283K Tweets</small>
                </p>
              </div>
            </div>
            <div className="m-0 fondo-hover">
              <div className="px-3 py-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="card-text text-muted m-0">
                      <small>Arroyo Miguelete - Trending</small>
                    </p>
                  </div>
                  <div className="icon-container">
                    <div
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="More"
                      role="button"
                      tabindex="0"
                      className=""
                      data-testid="caret"
                    >
                      <div dir="ltr" className="">
                        <div className="css-1dbjc4n r-xoduu5">
                          <div className=""></div>
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="logo2"
                          >
                            <g>
                              <circle cx="5" cy="12" r="2"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                              <circle cx="19" cy="12" r="2"></circle>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="card-subtitle mb-1 mt-1 text-white">
                  Desastre ecológico
                </h6>
                <p className="card-text text-muted">
                  <small>283K Tweets</small>
                </p>
              </div>
            </div>

            <div className="fondo-hover">
              <a href="#" className="card-link text-primary px-3 pt-2 pb-2">
                <small>Show more</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-3 d-none d-lg-block">
        <div className="card w-100 bg-dark">
          <div className="">
            <div className="d-flex justify-content-between align-items-center mt-1 mx-3">
              <div>
                <h5 className="card-title text-white">Who to follow</h5>
              </div>
            </div>
            <div id="elObservador" className="m-0 fondo-hover">
              <div className="px-3 py-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="icon-container p-0"
                      src="/img/mSTk9qRJ_400x400.jpg"
                      alt="logo el Observador"
                    />
                  </div>
                  <div className="ms-2">
                    <div className="d-flex align-items-center">
                      <h6 className="card-subtitle mt-1 text-white">
                        El Observador
                      </h6>
                      <div className="icon-container">
                        <svg
                          viewBox="0 0 24 24"
                          aria-label="Verified account"
                          className="logo3 ms-1"
                        >
                          <g>
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="card-text text-muted mt-1">
                        <small>@Observador</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="">
                    <button className="btn btn-primary rounded-pill px-3 py-0">
                      Follow
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div id="telenoche" className="m-0 fondo-hover">
              <div className="px-3 py-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="icon-container p-0"
                      src="/img/1S8ZS3zH_400x400.jpg"
                      alt="logo el Observador"
                    />
                  </div>
                  <div className="ms-2">
                    <div className="d-flex align-items-center">
                      <h6 className="card-subtitle mt-1 text-white">
                        Telenoche
                      </h6>
                      <div className="icon-container">
                        <svg
                          viewBox="0 0 24 24"
                          aria-label="Verified account"
                          className="logo3 ms-1"
                        >
                          <g>
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="card-text text-muted mt-1">
                        <small>@TelenocheUy</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="">
                    <button className="btn btn-primary rounded-pill px-3 py-0">
                      Follow
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="fondo-hover">
              <a href="#" className="card-link text-primary px-3 pt-2 pb-2">
                <small>Show more</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarRight;
