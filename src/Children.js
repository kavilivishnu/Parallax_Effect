import React from 'react';
import Parallax from 'react-rellax';

function Children () {
    return (
        <div>
            <Parallax speed={ -5 }>
              <img className="image-style" src="https://mita.gov.mt/en/stemclub/PublishingImages/Logos/Code.jpg" alt="" />
            </Parallax>
            <div className="heading">   
              <Parallax speed={ 2 }>
                <h1 style={{fontFamily: "Roboto Mono", color: "white"}}>Welcome to the page!</h1>
              </Parallax>
              <Parallax speed={ -1 }>
                <h1 style={{fontFamily: "Roboto Mono", color: "white"}}>Wanna become a DEV?</h1>
              </Parallax>
              <Parallax speed={ -2 }>
                <h1 style={{fontFamily: "Paprika", color: "white", marginLeft: "10%"}}>Join us!</h1>
              </Parallax>
              <Parallax speed={ -2 }>
                <a href="Google.com" style={{color: "white", marginLeft: "8%"}}>UnworthyToWorthy.com</a>
              </Parallax>
          </div>
          <div className="salmon">
              <Parallax speed={ -3 }>
                <h1 className="heading-1" style={{marginLeft: "75%", color: "white", fontFamily: "Nothing You Could Do"}}>Have a great day!</h1>
              </Parallax>
          </div>
        </div>
    );
}

export default Children;