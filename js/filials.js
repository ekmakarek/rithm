async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    const map1 = new YMap(
        document.getElementById('map1'),
        {
            location: {
                center: [44.822064,48.762297],
                zoom: 20,
            }
        }, [
            new YMapDefaultSchemeLayer(),
            new YMapDefaultFeaturesLayer(),
        ]);
    const map2 = new YMap(
        document.getElementById('map2'),
        {
            location: {
                center: [44.871603, 48.699789],
                zoom: 19,
            }
        }, [
            new YMapDefaultSchemeLayer(),
            new YMapDefaultFeaturesLayer(),
        ]);

    map1.addChild(new YMapDefaultMarker({ coordinates: [44.822064,48.762297], color: '#023755' }));
    map2.addChild(new YMapDefaultMarker({ coordinates: [44.871603, 48.699789], color: '#023755'  }));
}

initMap();