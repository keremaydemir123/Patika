import React, { useState, useEffect } from "react";

function GeolocationPermissionNotification() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setPermissionGranted(true);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }, []);

  const handlePermissionClick = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setPosition({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
                setPermissionGranted(true);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (permissionStatus.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setPosition({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
                setPermissionGranted(true);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setPermissionGranted(true);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  return (
    <div>
      {!permissionGranted && (
        <button onClick={handlePermissionClick}>
          Grant geolocation permission
        </button>
      )}
      {permissionGranted && (
        <p>
          Geolocation permission granted! Your position is ({position.latitude},{" "}
          {position.longitude})
        </p>
      )}
    </div>
  );
}

export default GeolocationPermissionNotification;
