/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e7e44375f64c8b6cf87675ed2a5606a2"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.370c168e.js",
    "revision": "d922957e91ba3a3a88c04ffd8960cd81"
  },
  {
    "url": "assets/js/12.e6a17819.js",
    "revision": "5745e94f17f73a5d916d9c1df13ce395"
  },
  {
    "url": "assets/js/13.a38bae57.js",
    "revision": "d204b05473b845efacda91f489813acd"
  },
  {
    "url": "assets/js/14.379a7b6f.js",
    "revision": "eda8249fdd8aa0c9ed59d4f03c7a7df0"
  },
  {
    "url": "assets/js/15.fecfbe04.js",
    "revision": "d2f758171856101e082ef7ffdb680425"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.5d604219.js",
    "revision": "7dc640b4442b769aae3830999ab2fc9d"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.e792885f.js",
    "revision": "4973cd631651cd1ba10412b406e7b52f"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.20f88f2b.js",
    "revision": "da7eff8113f48772f625667d3f98de5d"
  },
  {
    "url": "assets/js/21.b9c83e85.js",
    "revision": "b921ec291f9a0592da5243f3a639001f"
  },
  {
    "url": "assets/js/22.44054224.js",
    "revision": "d5469f60a8a1e2c439858a74ce50a21d"
  },
  {
    "url": "assets/js/23.680099e7.js",
    "revision": "6b42f2f8357016e5964d3a94bebb5ad9"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.fd161f03.js",
    "revision": "a1b528282351727b5ded515a55dc1911"
  },
  {
    "url": "assets/js/26.c7672d79.js",
    "revision": "bdbc563ccdda372848e0b8f5ee9db191"
  },
  {
    "url": "assets/js/27.b605021b.js",
    "revision": "57a9f2b1a9b035b19230f3cfbf583030"
  },
  {
    "url": "assets/js/28.8b723ad9.js",
    "revision": "245b02ce7d183ce41e0b5c875de81ae4"
  },
  {
    "url": "assets/js/29.b93e6276.js",
    "revision": "7fe416721ee78fd32aea40d503f2e0a6"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.42cb6708.js",
    "revision": "d57a3552d4b3aa3440c9e4d6e0169d5c"
  },
  {
    "url": "assets/js/31.a9e4326d.js",
    "revision": "281a19ec24d2d198d7fdfc5d6262dea5"
  },
  {
    "url": "assets/js/32.effc0d29.js",
    "revision": "90e017ee05bfdd289daf67507d29658e"
  },
  {
    "url": "assets/js/33.a65e86f9.js",
    "revision": "f8e92255ab3d94fe623d89461b22422e"
  },
  {
    "url": "assets/js/34.44af1dd2.js",
    "revision": "0752b312c24dec320bd5b8b1236ff391"
  },
  {
    "url": "assets/js/35.d011b2cf.js",
    "revision": "97f40b440154c0ca0fc11b31e1f8c2b6"
  },
  {
    "url": "assets/js/36.0dff3eca.js",
    "revision": "8d099040c3e0a01e0edc8de622f22cec"
  },
  {
    "url": "assets/js/37.1d1c2c62.js",
    "revision": "a4e2cdf0418ef3f861ad8c852fa11812"
  },
  {
    "url": "assets/js/38.dfc6af1b.js",
    "revision": "6fa1f603ddf95e9a3e1df5e68a641041"
  },
  {
    "url": "assets/js/39.92498efe.js",
    "revision": "2944efe25d7c09d3f6b41edf4ec10607"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.d2f869d0.js",
    "revision": "0dcb3a11892e99f35725406c0088a98d"
  },
  {
    "url": "assets/js/41.8ac4503e.js",
    "revision": "97fc408dc7a3e66e604c493131d6daa1"
  },
  {
    "url": "assets/js/42.372501dd.js",
    "revision": "c86cd125e3ff1085358f224df2be82f1"
  },
  {
    "url": "assets/js/43.fb4273bb.js",
    "revision": "02e0aa492c5a51049c8b84f4c2d0d037"
  },
  {
    "url": "assets/js/44.f11c8659.js",
    "revision": "7eac8b651bc6cafe458b6ba5e6650648"
  },
  {
    "url": "assets/js/45.3ba05482.js",
    "revision": "57aaf2cf397a914516be0a401767fcc5"
  },
  {
    "url": "assets/js/46.8821f174.js",
    "revision": "4448e3bc4f81957d23c2e41db4d01f65"
  },
  {
    "url": "assets/js/47.22428547.js",
    "revision": "5101f33ef681aec3cd59b8632b537c60"
  },
  {
    "url": "assets/js/48.23c5fdae.js",
    "revision": "17e7c7732a6611058e60b593e003d326"
  },
  {
    "url": "assets/js/49.5cac1a98.js",
    "revision": "c3a95a1ddac118da76c1c9e2d2c9f26e"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.9684a55c.js",
    "revision": "5c9cf6100870e5542a641c347363f08b"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.ad255086.js",
    "revision": "172c84da9b26521b5372ec9490c24d51"
  },
  {
    "url": "assets/js/55.d35c593b.js",
    "revision": "529112c773f95a1805b319f0e65cc9b2"
  },
  {
    "url": "assets/js/56.780ba6cd.js",
    "revision": "ccd2841bf4b97c8937c360e610a719c7"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.54abefbe.js",
    "revision": "876eacc909c7a34d5b6c6bf6bfc9b38f"
  },
  {
    "url": "assets/js/6.6fde3483.js",
    "revision": "baa738afd6a7d334a3e48d1f70c610ff"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.ff3840cc.js",
    "revision": "3e8d3537a00b1e09e1d5328f250d19d8"
  },
  {
    "url": "assets/js/62.010d029e.js",
    "revision": "2acfc7437737c9f0ac003065a9f6f371"
  },
  {
    "url": "assets/js/63.37c65c4f.js",
    "revision": "89b37b38b7120026ff56993b233c50e3"
  },
  {
    "url": "assets/js/64.dc692e44.js",
    "revision": "c3b64c00950696df80de84321109b34e"
  },
  {
    "url": "assets/js/65.5e14bfa2.js",
    "revision": "037beaebedb2b130abaeac94a9159559"
  },
  {
    "url": "assets/js/66.3a080038.js",
    "revision": "4b5926642e6781ffe8973efce2a5c6b7"
  },
  {
    "url": "assets/js/67.95329b50.js",
    "revision": "e3d98a2a0d19c5e55d18838ce2cdeec4"
  },
  {
    "url": "assets/js/68.ac829fd3.js",
    "revision": "dc2b0f752029201dd86fb32f68c6a2a1"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.574f184f.js",
    "revision": "165b18725b95fd05d69422e261120ed8"
  },
  {
    "url": "assets/js/70.c3abaac0.js",
    "revision": "4ab5b9d2d5776334e296c0238fc9da08"
  },
  {
    "url": "assets/js/71.1167de03.js",
    "revision": "1ee4f372c3ede5589c034c60b24c8daf"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.448c88b0.js",
    "revision": "edb308131ac428916e8d9949e7df63bf"
  },
  {
    "url": "assets/js/74.f2c6daf2.js",
    "revision": "b65f8e2b05a964cc2ec9d7a269527d11"
  },
  {
    "url": "assets/js/75.877caa02.js",
    "revision": "bb097210deaa63f203e2ae5ac9ed83ba"
  },
  {
    "url": "assets/js/76.e86a0924.js",
    "revision": "47ffcb141dbc5753cec1f60b9c63e483"
  },
  {
    "url": "assets/js/77.f77c2637.js",
    "revision": "69d5860abb9d30dc9a55f3b4540b528d"
  },
  {
    "url": "assets/js/78.aa7f73bb.js",
    "revision": "1ff018ee8de2dc7dc96c7f16e5be7357"
  },
  {
    "url": "assets/js/79.568d84b9.js",
    "revision": "e44e7c35037a33c7922802c21f4a2751"
  },
  {
    "url": "assets/js/8.04152986.js",
    "revision": "30293805cacac2114ea340316137590d"
  },
  {
    "url": "assets/js/80.dbba0d11.js",
    "revision": "60e6e3f6d47d5cb02d81179ae6fb45b2"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.31f227ce.js",
    "revision": "422e820cc3dc808e35cd18008b714aee"
  },
  {
    "url": "assets/js/83.2cffe812.js",
    "revision": "4a7cc4de32ffccc16bccdc52ea6ee491"
  },
  {
    "url": "assets/js/84.9ff1f804.js",
    "revision": "8486308450ce81084f158434736674e3"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.2a5f9f85.js",
    "revision": "ca929e60f8d5289fb666dd7931c620a7"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.2a19c074.js",
    "revision": "0f90fefd91f0c343a547b84a11cade21"
  },
  {
    "url": "compiler/ast.html",
    "revision": "96aef1fffe25c9b1139b0b97df4f92ea"
  },
  {
    "url": "compiler/binder.html",
    "revision": "73a928847c810b12f048b45b41bc93a1"
  },
  {
    "url": "compiler/checker.html",
    "revision": "472d34254558b4fdd1f625ec2da87f65"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "06445b18e94d5e7333fd6d2c0cd44cb4"
  },
  {
    "url": "compiler/overview.html",
    "revision": "402f45a808328ba5545f59e63aca0ce8"
  },
  {
    "url": "compiler/parser.html",
    "revision": "acc22c520d90d00530db3dbbfc79c717"
  },
  {
    "url": "compiler/program.html",
    "revision": "f4b637974bf195ae06ef4d90689b0565"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "2927ef6de16958eebc4302b93084299d"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "d8eade7ffec0bde17b2cf492a51d1d2e"
  },
  {
    "url": "error/interpreting.html",
    "revision": "bead601c15d50142c06bfaa8de508b53"
  },
  {
    "url": "faqs/class.html",
    "revision": "27eec3e3b6ac2f03f9202e7fb95540ca"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "1f36501306a7a0801fbd88797abd6338"
  },
  {
    "url": "faqs/comments.html",
    "revision": "1a708bf3b81e1c5806d10bce79d4c986"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "e06125a11fd52149f6db16681cc1e72b"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "ba5faf45cf45c8712e2d56ed89ec659d"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "dd4eb512d72805ca968ce94ea41fb56e"
  },
  {
    "url": "faqs/enums.html",
    "revision": "f798b59e6e2744e5cc5e5dc7f5a6bde2"
  },
  {
    "url": "faqs/function.html",
    "revision": "e28e2e672f5f75c5ae0c2e14419809ca"
  },
  {
    "url": "faqs/generics.html",
    "revision": "b444b80eaf03f82f3958ee2b16dab256"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "448cfe5ca7b7c42e67c150cee1ff3a23"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "0352e37342fb7a45ccf87fb908bd5522"
  },
  {
    "url": "faqs/modules.html",
    "revision": "2d934a45f70ad29526827e38981b4ac1"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "d0fcf9c2f2d601b59176f39b87dd47e8"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "4a290d177bc3404c3f65eec5bd07c93d"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "3c77293295f79b88ec097bbdf9a60588"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "a250aedd28eacb444cc4346d845f51be"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "a06ad2ffd985c5a90437e4ec2058d222"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "ec3b5dcf8c7678bebb0d056e45d34954"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "74f426f5fcd6ee9878827659cd9a352f"
  },
  {
    "url": "jsx/support.html",
    "revision": "ae3d5d65f94fa8deb33d369bd9205729"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "f8d713a1e48774c0207bbb734e95559f"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "3a5fa4e1df11ed04cf2c68fe41e3b9a8"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "dd74cfbefc29a2a7936db169553583cc"
  },
  {
    "url": "project/modules.html",
    "revision": "2a20aa49cf85aef3bed352c03c60d254"
  },
  {
    "url": "project/namespaces.html",
    "revision": "6585adeb50d7c18f8a8c23b29c69ddba"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "3a4cbd63919ca43637df4ef239de8e1d"
  },
  {
    "url": "tips/barrel.html",
    "revision": "e8e0225b18c4d6d6fdba784219bce0ed"
  },
  {
    "url": "tips/bind.html",
    "revision": "c3e836e436933e70743d667d801b639b"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "f7c1a4c790876210e5ea72a52ab8ed22"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "9094fe29158025cfa48b744e37c55efd"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "01ce8a10e06ffb62f7de5f2a4de173de"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "b8983799109161685bcd2afb0cac06ee"
  },
  {
    "url": "tips/curry.html",
    "revision": "4990d1f88dc18c9b9b173676fef2e696"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "9ce12ceaa0668bb9994b4879f13ca138"
  },
  {
    "url": "tips/infer.html",
    "revision": "96d6533044fddd4d5b801095f606864b"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "24bd1c84b0a95f49c5d4c4e51b1ca935"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "c8c206e827a1fdd4551640c84da54c16"
  },
  {
    "url": "tips/metadata.html",
    "revision": "af3a3da3f9e1783e6b8e5cba5932241a"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "ede977124405d3e1aa13fefbe5d3a4fd"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "0e8de071f2177ed2251c8e1aa67c92d7"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "a6d8adab37b413c5eb00d84811369abe"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "fee7776176f879ae979020d0d5e4d48a"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "ee309830451f06c157b861bc2c8b45be"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "95886b5d17f1d3d06ef3ae2e0bb1868b"
  },
  {
    "url": "tips/truthy.html",
    "revision": "a72e09ac3d8a6b489a2dfade06aa0fe3"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "c51a7fad5a55c3f500c6f00d74d322f8"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "1d09b6fb7a39f335f03023f3c007beef"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "92ca25e89029d665bdab8482cf679cd2"
  },
  {
    "url": "typings/callable.html",
    "revision": "12f5842b799ba3c34ad8196ee3a16e28"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "e2cd8397c87c4615a23bc8e0be3c29f7"
  },
  {
    "url": "typings/enums.html",
    "revision": "a973fca7b475e2a2e7a6e1b331c2be15"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "cb1bb74785719f51e76cbf073f62e811"
  },
  {
    "url": "typings/freshness.html",
    "revision": "c82e3cd4a78c86e74c3940c8646d1d33"
  },
  {
    "url": "typings/functions.html",
    "revision": "4747eead327f8785c33f2cadaa1ace34"
  },
  {
    "url": "typings/generices.html",
    "revision": "89d75b763ba26ad3f258803638037894"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "9bbc78dbc7d169033def9d1e0c38bb75"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "71e1e947296f09a0988e3b462dd94d77"
  },
  {
    "url": "typings/lib.html",
    "revision": "117e9e7917769f6384c387a3781873ad"
  },
  {
    "url": "typings/literals.html",
    "revision": "1c217ca5cf7cad89924f48f4fa6b6fd0"
  },
  {
    "url": "typings/migrating.html",
    "revision": "d6b1b97c2c655520ff6350a3dc487148"
  },
  {
    "url": "typings/mixins.html",
    "revision": "55d950a292012b05d8a969a18f7e6dc5"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "558cad7bddaa33a7addd8d539aad9ffd"
  },
  {
    "url": "typings/neverType.html",
    "revision": "906818cabf90869104dae71997ae7f46"
  },
  {
    "url": "typings/overview.html",
    "revision": "bda8bd119125cfc870c99c7951939cc6"
  },
  {
    "url": "typings/readonly.html",
    "revision": "89942344cac4404ef5b2071ec3a338b9"
  },
  {
    "url": "typings/thisType.html",
    "revision": "d8adeb7180c5f8c0ff81de3964035a85"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "2a997311a99b46608afe3811d6d3eca7"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "1f7b0b3e9e13abd92620d7a24540940b"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "8136dd35beff4fd8f4372ee8bf8a83ee"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "1fdb85724a73ed2a1f00d8c10ba1346b"
  },
  {
    "url": "typings/types.html",
    "revision": "05027904b4070b2f0ec8d943d00b5dae"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
