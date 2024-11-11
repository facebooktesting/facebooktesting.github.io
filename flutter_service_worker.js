'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "48da3608a3f5b59c059ccb32e809db81",
"version.json": "e513c79d87a15aed2c485175bafd61a8",
"index.html": "702f37524a3c1966a4deaeaacc914f3e",
"/": "702f37524a3c1966a4deaeaacc914f3e",
"main.dart.js": "03573347c67e86447390e6a22cae18dc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "293418e1b745013b0ab9bd2d656f8380",
"assets/AssetManifest.json": "399b41f946842faa79d8e8cc47323457",
"assets/NOTICES": "b2422120022d5388392cbe284f0ed785",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4ac7ac460fe1b647d92699ecbb430c5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "07f4f5e45291cc3b5a07c34c68069239",
"assets/fonts/MaterialIcons-Regular.otf": "54b30154cf83433d2e9265e2f4109e36",
"assets/assets/images/no_avatar.png": "0d3b90cca8b1e678290d05ad9d7a0d1d",
"assets/assets/images/img.png": "de4c1895b423d2b3938a7bdf1f4783d2",
"assets/assets/images/4.jpg": "4ce279c74098255c8835a6e373662870",
"assets/assets/images/5.jpg": "91982170524f76462502484e9789fa2a",
"assets/assets/images/2.jpg": "d7c9c3949f165a08a5d12bb83a99c053",
"assets/assets/images/3.jpg": "e4c2ffec4c2c9fc306e381afb700f9dd",
"assets/assets/images/1.jpg": "3805de407845a50b86c35f75ce268755",
"assets/assets/images/avatar.jpeg": "3c7ab5bf65d0c56172a783175db9f734",
"assets/assets/icons/ic_share.svg": "b745d05bce7b9d5894560d2a282758c8",
"assets/assets/icons/ic_groups_color.png": "4275e87e137611d927e8ed86846bf043",
"assets/assets/icons/ic_comment.svg": "d5c98ab650ecbb0396b8ac0b040ba7c9",
"assets/assets/icons/ic_facebook.svg": "ce0c8188520a88e43c81e611847721ac",
"assets/assets/icons/ic_video_color.png": "26095e06c9275870bf3daf0c65a0ab60",
"assets/assets/icons/ic_heart.svg": "578b4881e9c06f531f30232e5ad5e998",
"assets/assets/icons/ic_shop.svg": "79bf0f292e8a124ded11144c91e043c1",
"assets/assets/icons/ic_home.svg": "aed495ad95ca05eafe2e8cb0a8a61b13",
"assets/assets/icons/ic_messenger.svg": "589a34454c62cec8e655325ee88e201f",
"assets/assets/icons/ic_gamepads.svg": "4be7eccf395c7a8ab8cfc8663291c944",
"assets/assets/icons/ic_notification.svg": "e7e69d637b44490f4b640933916b1fc1",
"assets/assets/icons/ic_like.svg": "e3d9d7bca3b401129549a745251b6ab3",
"assets/assets/icons/ic_friends_color.png": "0c4df25b1121c8d715a84ca08ae53835",
"assets/assets/icons/ic_groups.svg": "d90b7e3cc7877b467c23b029cdf9de2e",
"assets/assets/icons/ic_memories_color.png": "8b9df23ada33e6dfdc32f1ef5d3a7725",
"assets/assets/icons/protection_icon.avif": "f4156d3da671c1873a1ba7761e39d5ba",
"assets/assets/icons/ic_menu.svg": "f891dd58da5f1684a5a3d355a9e8a9c8",
"assets/assets/icons/ic_series.svg": "5477422abe121264878dad2b9d1132ed",
"assets/assets/icons/ic_like_outline.svg": "813645b0fa83c79d0a3bc0cdc554b65e",
"assets/assets/icons/probreeze-white.webp": "6a7456f21d51d06db2bb5c3dad2b875b",
"assets/assets/icons/ic_search.svg": "f4aad2031bd590d8b34431cbd1886409",
"assets/assets/icons/ic_saved_color.png": "7468b92617760edc2af024e98d7a12b7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
