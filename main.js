javascript: (function() {
    if (typeof geofs !== 'undefined' && geofs.aircraft && geofs.aircraft.instance) {
        console.log("Current Aircraft ID:", geofs.aircraft.instance.id);
        console.log("Current Aircraft Name:", geofs.aircraft.instance.definition.displayName);
        ui.notification.show("Aircraft ID " + geofs.aircraft.instance.id);
    } else {
        console.log("GeoFS aircraft instance not found yet.");
        ui.notification.show("GeoFS not ready or no aircraft loaded.");
    }
})();
