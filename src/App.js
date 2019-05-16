import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import * as SWRTC from "@andyet/simplewebrtc";

// ====================================================================
// IMPORTANT SETUP
// ====================================================================
// Replace `YOUR_API_KEY` here with the API key you received when
// signing up for SimpleWebRTC
// --------------------------------------------------------------------
const API_KEY = '55379bd328240aa9a2a0eea4';
// ====================================================================

const ROOM_NAME = 'YOUR_ROOM_NAME';
const ROOM_PASSWORD = 'YOUR_ROOM_PASSWORD';
const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`

const store = SWRTC.createStore();

function App() {
  return (
      <Provider store={store}>
        <SWRTC.Provider configUrl={CONFIG_URL}>
          {/* Render based on the connection state */}
          <SWRTC.Connecting>
            <h1>Connecting...</h1>
          </SWRTC.Connecting>
          <SWRTC.Connected>
            <h1>Connected!</h1>
            {/* Request the user's media */}
            <SWRTC.RequestUserMedia audio video auto />

            {/* Enable playing remote audio. */}
            <SWRTC.RemoteAudioPlayer />

            {/* Connect to a room with a name and optional password */}
            <SWRTC.Room name={ROOM_NAME}>
              {(props) => {
                /* Use the rest of the SWRTC React Components to render your UI */
                  return(<SWRTC.ChatComposers/>)
              }}
            </SWRTC.Room>
          </SWRTC.Connected>

            <SWRTC.Disconnected>
                <p>
                    There was an error initializing the client. The service might not be
                    available.
                </p>
            </SWRTC.Disconnected>
        </SWRTC.Provider>
      </Provider>
  );
}

export default App;
