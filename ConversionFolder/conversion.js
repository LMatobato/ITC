
    document.addEventListener("DOMContentLoaded", function() {
      // Celsius to Fahrenheit conversion
      document.getElementById("CeltoFah").addEventListener("click", function() {
        var n1 = parseFloat(document.getElementById("numconv").value);
        if (!isNaN(n1)) {
          var n2 = (n1 * 9 / 5) + 32;
          document.getElementById("output").value = n2;
        }
      });

      // Fahrenheit to Celsius conversion
      document.getElementById("FahtoCel").addEventListener("click", function() {
        var n1 = parseFloat(document.getElementById("numconv").value);
        if (!isNaN(n1)) {
          var n2 = (n1 - 32) * 5 / 9;
          document.getElementById("output").value = n2;
        }
      });

      // Meter to Feet conversion
      document.getElementById("MetertoFeet").addEventListener("click", function() {
        var n1 = parseFloat(document.getElementById("numconv").value);
        if (!isNaN(n1)) {
          var n2 = n1 * 3.28084;
          document.getElementById("output").value = n2;
        }
      });

      // Feet to Meter conversion
      document.getElementById("FeettoMeter").addEventListener("click", function() {
        var n1 = parseFloat(document.getElementById("numconv").value);
        if (!isNaN(n1)) {
          var n2 = n1 / 3.28084;
          document.getElementById("output").value = n2;
        }
      });

      // Clear values
      document.getElementById("clearvalues").addEventListener("click", function() {
        document.getElementById("numconv").value = '';
        document.getElementById("output").value = '';
      });
    });
