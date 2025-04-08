'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "18bab6af6fbf23f1741c74aecf22cfe6",
"version.json": "d54e0920841b2d3cc4455e7131547551",
"index.html": "288920f14c891d96bcd880cfd53b6746",
"/": "288920f14c891d96bcd880cfd53b6746",
"main.dart.js": "81108d6cc5aba0cc43181e31ddc9580a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"joongna_gazua_flutter/test/widget_test.dart": "861acb14f0d1fe4ec766f12e95ba01bc",
"joongna_gazua_flutter/web/index.html": "6172c30a0975f66130280723a63db09d",
"joongna_gazua_flutter/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"joongna_gazua_flutter/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"joongna_gazua_flutter/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"joongna_gazua_flutter/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"joongna_gazua_flutter/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"joongna_gazua_flutter/web/manifest.json": "9e32b5c0bca20bb29862b6ea9fee8414",
"joongna_gazua_flutter/pubspec.lock": "864629591925dd4358d5c717b6486ff3",
"joongna_gazua_flutter/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"joongna_gazua_flutter/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"joongna_gazua_flutter/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"joongna_gazua_flutter/ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"joongna_gazua_flutter/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"joongna_gazua_flutter/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"joongna_gazua_flutter/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"joongna_gazua_flutter/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"joongna_gazua_flutter/ios/Runner/AppDelegate.swift": "303ca46dbd58544be7b816861d70a27c",
"joongna_gazua_flutter/ios/Runner/Info.plist": "d38bd9bb79ac9648b884fdd67d15f9a3",
"joongna_gazua_flutter/ios/Runner.xcodeproj/project.pbxproj": "caf87032c95c505454ad338370af7f50",
"joongna_gazua_flutter/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"joongna_gazua_flutter/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"joongna_gazua_flutter/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"joongna_gazua_flutter/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "3e088bc3ef2b27e72da13a5f953edd64",
"joongna_gazua_flutter/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"joongna_gazua_flutter/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"joongna_gazua_flutter/ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"joongna_gazua_flutter/README.md": "89929c720934743b27916fe4a05ee55b",
"joongna_gazua_flutter/pubspec.yaml": "3450dbe67cdb969895568cc92661b932",
"joongna_gazua_flutter/android/app/build.gradle.kts": "457963c343bdcd5bc4194c5ac1b2c8be",
"joongna_gazua_flutter/android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"joongna_gazua_flutter/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"joongna_gazua_flutter/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"joongna_gazua_flutter/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"joongna_gazua_flutter/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"joongna_gazua_flutter/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"joongna_gazua_flutter/android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"joongna_gazua_flutter/android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"joongna_gazua_flutter/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"joongna_gazua_flutter/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"joongna_gazua_flutter/android/app/src/main/AndroidManifest.xml": "d6bc71b7523dc611dd2fa94b5592d2a1",
"joongna_gazua_flutter/android/app/src/main/kotlin/com/joongnagazua/joongna_gazua_flutter/MainActivity.kt": "2dd9a2dd1b9e63b707b61fd564b528ff",
"joongna_gazua_flutter/android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"joongna_gazua_flutter/android/gradle/wrapper/gradle-wrapper.properties": "63a74fa50183b131917bedd120ce2d40",
"joongna_gazua_flutter/android/build.gradle.kts": "699579880a795350891cafc998a3ec79",
"joongna_gazua_flutter/android/settings.gradle.kts": "683f9ca2f32a701ed1517715bf394e23",
"joongna_gazua_flutter/android/gradle.properties": "7b10ce389a3f45df326e4f3b665aa00f",
"joongna_gazua_flutter/lib/core/di/analysis_module.dart": "7d8adc60d5bae9c8d49be6234faf8eb1",
"joongna_gazua_flutter/lib/core/theme/app_text_styles.dart": "38b771082719ef9f213ee2f6f47dc0da",
"joongna_gazua_flutter/lib/core/theme/app_colors.dart": "b49a299c50fa5f2ea19f6d52da6e2b2d",
"joongna_gazua_flutter/lib/features/analysis/data/dto/top_word_dto.dart": "651432b527161ccb870afa3f4153ad42",
"joongna_gazua_flutter/lib/features/analysis/data/dto/rating_analysis_dto.dart": "6cc5b8d182014b734aa7597be473447c",
"joongna_gazua_flutter/lib/features/analysis/data/dto/analysis_response.dart": "511babb7efb50ccd5a576c215cd59c63",
"joongna_gazua_flutter/lib/features/analysis/data/data_source/analysis_static_data_source.dart": "25dddf6e3267f8ce7dec8e75e074e1ba",
"joongna_gazua_flutter/lib/features/analysis/data/data_source/analysis_data_source.dart": "c60baca1359200d560c116740d5fee5f",
"joongna_gazua_flutter/lib/features/analysis/data/repository_impl/analysis_repository_impl.dart": "c6a5e8678713cc5af6b541ac1c1cf567",
"joongna_gazua_flutter/lib/features/analysis/domain/repository/analysis_repository.dart": "3d1f73d6e1fadf54b5e9cb652aa6fb09",
"joongna_gazua_flutter/lib/features/analysis/domain/entity/rating_analysis.dart": "7afff58c64e61f6c95e594e4546af72e",
"joongna_gazua_flutter/lib/features/analysis/domain/entity/top_word.dart": "85841434796ab5f3b4a3df160cea5ce9",
"joongna_gazua_flutter/lib/features/analysis/domain/entity/analysis_data.dart": "48b6e02754a82749515f83e26ee9935d",
"joongna_gazua_flutter/lib/features/analysis/domain/usecase/get_analysis_use_case.dart": "20dd69d164de9053623725b840d23a57",
"joongna_gazua_flutter/lib/features/analysis/presentation/viewmodel/analysis_view_model.dart": "fe43b0cd1f97db06a007fb7e73c2489e",
"joongna_gazua_flutter/lib/features/analysis/presentation/page/skeleton_analysis_page.dart": "b27fb26b3f709ef9f74a0387e9244526",
"joongna_gazua_flutter/lib/features/analysis/presentation/page/analysis_page.dart": "00893a9fd39737c9ee0932d6a9d77f76",
"joongna_gazua_flutter/lib/features/analysis/presentation/widget/analysis_list_view.dart": "cace66dd301c0dd5f8d8653fa605ed0f",
"joongna_gazua_flutter/lib/features/analysis/presentation/widget/rank_item.dart": "d1d53b8b646059490adea85a8b6d95cf",
"joongna_gazua_flutter/lib/features/analysis/presentation/widget/pie_chart_widget.dart": "6ee9f798a2a2d8dcfab664002cf7365b",
"joongna_gazua_flutter/lib/features/analysis/presentation/widget/analysis_card.dart": "f36a3355571ab449c4cdc1cb5fb6fa73",
"joongna_gazua_flutter/lib/features/analysis/presentation/state/analysis_state.dart": "6ff2402aa9f6e233f54e0be6c9574901",
"joongna_gazua_flutter/lib/main.dart": "4465cb08cd1d4b09838623b1a7252525",
"joongna_gazua_flutter/lib/assets/analysis.json": "7704245bd7374f96ba19bd80b388843f",
"joongna_gazua_flutter/analysis_options.yaml": "66d03d7647c8e438164feaf5b922d44a",
"README.md": "d867ca7e5175a16ecce0ea5abbd81bf3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"joongna_reviews_crawling.ipynb": "89276e8d17eb6be367ab2c12127260d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9e32b5c0bca20bb29862b6ea9fee8414",
".ipynb_checkpoints/joongna_reviews_crawling-checkpoint.ipynb": "f1931d82114a6c1ca5f019c03dee8a54",
".git/ORIG_HEAD": "1ba7a57c3ef754ba77833ae71424fabc",
".git/config": "84794e10f85df4bf97fb3cf6b60098ed",
".git/objects/0d/b7b5f7279c1bd48678cacae42d56edbf81c74b": "7cd3d7b67b17f80576f3f3374f089c31",
".git/objects/95/b7d3bb790af532dc473c4e08dfee8bdaf5581c": "4f47eedfbd09c7311a2da7b84b9e1f82",
".git/objects/0c/53f8dde1f3f78283d646f3553fe42cf61ae684": "6515219ff166273b74da6b14331a9639",
".git/objects/3e/9a53763b40040206ac751e641b7a907ed0d31a": "7aeab5533340807516232d778ac762f2",
".git/objects/68/aac4a44eaa6890cb77cca3262a4958b480d49c": "0b101da05d4de6319be2101d3028398c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/f6fcbf148af986a3b6feeb30c9c557216ab523": "f429e6d2b3e5f45171adfe29719b87c1",
".git/objects/6f/b527af79de80bf47394808e764c4ee55a592d1": "5b3b53d694f809ae57e96f6cbe2a2f28",
".git/objects/6f/8eccafeafc3ee6aa3458052fe93526711f8919": "247a6a800b46fb3445c59686609e8853",
".git/objects/6f/fddc0a36fad021d71e5caf6eccde274aaaf66e": "75feb51aada21e7a9e716c315b2f28d3",
".git/objects/03/3d36e59f35a2875203feafb9e0f2e97749bec9": "247256a1b42c5f3dc8029e65f3aa44c4",
".git/objects/9e/92b7aa36be904bca48be6ea1ce0f764458fa78": "f05b1e36aad5853c9140d17935b28952",
".git/objects/6a/7f2c3031304a83e3594b8ab735f1894e03b393": "1336b08b6560a569eb78f51418174ea5",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/0b/7a1ba1d1f02a03a7a3f219ec8aae65705f60f2": "6cf06b5590ed20c65b1a9f9a5a834f91",
".git/objects/0b/3cf247821da9c52b7eaf7b326917b26318e382": "6d41457a36bcf415eff4d036db135462",
".git/objects/0b/8a83cd058a2f83afd86488e28d07cf0ba64a92": "9858832c0a2d11f8a14def02136039aa",
".git/objects/93/e9ebf518fb6ad1cdb0c6c922d4c4fae45e9fe8": "d179da0d92e28b305f98ed444217910c",
".git/objects/0e/b7df21044129d7360d44e49501bb7de7890ca8": "c69e201cfb93fb76236f3d2953d5fd88",
".git/objects/5a/111d3e613330475e1e2b05e7af9ae3d3f77030": "b57da3bd3747d6b9de7ac9bdf15bbc75",
".git/objects/5a/e4a93c0fa8e26151ad7c76c2f96804ae7b540d": "ecf775d33c573f4506fc38efaa8ed589",
".git/objects/5a/d083699bba2a385a0794019aa0e28c92e20434": "cb3b8491d9e797a40bdf703b271366b0",
".git/objects/5f/7faf89be74f1522c9e8f2db25bfbc0455ec9fe": "bf11fbdad42a0828806de4e1eaa57682",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/43f08286d9d61ba15d958f876bae85c7e3e101": "65d5ad9ed090cd019c169310078151e7",
".git/objects/b5/f9ecd336b00bdf37048770f047e740d71c5407": "ffde3a01ef42142c56585c5f1bfd7499",
".git/objects/b5/5ee0424f6c337df3efa0b69fb31bc622bc8baf": "bf3d29489d5b9a935c0618dad23e7eaa",
".git/objects/b2/9f0aab76cf12cc2c3f5e3edcef18f670bff354": "dbb16b3287929f668446dc32853fb5bc",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/bb/518c1242c6bc35a1a99b23a38bcfd3cc08d42a": "de601b99edad8b7c4a8943882fb310f6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/d1f6eb227e91720f8148db31d16ce13e295e80": "bb881198df4da14005cd48c9c01adee6",
".git/objects/a5/6fe8f5fd9820f7ea5a2e0bb92ac8ff7c054bcc": "6347360fbeb44acac661f1cdacbb24d2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/dca6871737bfd51366d124b366fc60294a3bfe": "8c3e46a4790ffdd6c774d105aa453724",
".git/objects/d1/42f69338a6e75b72dcdf7faf4fe5f23ad713e9": "028abf0d66229c116ed3757606e2ef09",
".git/objects/d1/8761cd5b1e52d1ae68b18a1f3efde1f0bce913": "23b840e98a346339f2db25f83a0d632f",
".git/objects/d6/8ec0db599521899edb841679336c15bdd3b797": "64d8c5dc85cd47520f08571e3b695a68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/314e1b6834403fe43c28849bc8f5081b7b7e39": "66034e9b254e0d825d4151ab28044087",
".git/objects/f4/b06e8b0d624cf85a55a56a8173f5f60d3c0a3e": "2eddae441e0d459cc2aa2831e21943e8",
".git/objects/f3/a22b817844cce6769806aa9f9dd62dc3149088": "bd25d8913c3ba82e52dbbcd1922a074b",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/17df44f8624427e8df9e83a4fdd864197c89e2": "109d3e1cb2ef476d58df447f96a09f98",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e0557ec7ed0e386a08264d312484a3d2da2a70": "cafb7762aca366ce5d5fae1bc273c03b",
".git/objects/f5/d0c7f775504bb404a3062e17e0277c143c2d9c": "725061b36a4a97d2e0d7c02d1a692857",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/452b279c0c744c16e4751fa1191d1024f855c0": "7ce056c076ce52c00ea62212a0b487c1",
".git/objects/cf/75bacf6f71fd0436597187a632d5e69bd796ac": "296e2615d5e10be67efe3fe9da60fdb6",
".git/objects/fb/c3c0151578e1254ba3536c91ab1de1502722bf": "c7bbd8e6e617f96e2aee9f7fdcd7ad6e",
".git/objects/ed/0ee5a95fe9fbc02a7b07c7f39e9f3dd164caa8": "c7005a71593a5a98519d211f7cff40c6",
".git/objects/c1/77c434c0fd635a586eb74a0390e980d13e374d": "5c8b65ee09f2f543666160fcef88d3a8",
".git/objects/c1/0954f4b9d46f4e498286a8c58b860f7f745b61": "2f9ed218983aa7873aff9b3516f43081",
".git/objects/4e/5a83d2e81fc87975ab49117b97b7915c24e5e9": "ec1b921cf885e6d6174aabb1bbc80577",
".git/objects/18/6d9233a7e37cdc2b2701b5fe6b20a81f60f8ce": "3512c93eeedc057e9d60f6c06e6ff1bf",
".git/objects/pack/pack-2e03e09f89b434ad345b2d26dbe02d551fafc543.idx": "934b83b4e5705cdab9a56de810ffc97c",
".git/objects/pack/pack-2e03e09f89b434ad345b2d26dbe02d551fafc543.pack": "a2da574a428f662264b89252843ec3ec",
".git/objects/16/aff73d8c55d3f2a80cc3d92699b3968a3ab0a7": "9cbc7e68c0cecebd869be3a5f48f444c",
".git/objects/16/46828b84056b2280443e7519d7876f38676a29": "085a1625cb57df541538a52811fd6ee1",
".git/objects/89/1ab993f548351e13e85e3a4e5741d423639075": "a177c7625ef86c86443f98401471b93d",
".git/objects/74/5d7085f4325ba020b632ee6a5b44b31a96a857": "8703cdb5310f6864ab3c3a599cf63f0c",
".git/objects/74/31f1d8b410d19f9e15ed5b3bf4461bc3973c8c": "ed6e819163b9bd51ffdc060a4a577b78",
".git/objects/7b/4efeb35d7e06f692b8e0ea206a308c9d89c462": "46b0c6741e1df19c704653dd85c98501",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/dd3ebcfa0ce6e91ed7b6b58243e6213fca84d0": "ce5662f7dd460b2744e23fcf927daa48",
".git/objects/19/f52502b52d68dd40d29a97fbab53c73bf8919e": "3e18a875ebeb9ec93f70630aba36a265",
".git/objects/26/6fd6f39316f0fdef19af1b15d27f5345fed151": "d4c00e40b6c13883fbf8f420b1bd1141",
".git/objects/26/cc68c2dce82d55154fe903bd60310aee69c5ba": "eb484e8880567089cd9a6f5f611a49d0",
".git/objects/21/35dfddd5c72d7bb24293fd326c7e289654da46": "96489c642693f6c153d7b63c33087a80",
".git/objects/81/25441406a1c8bcb45db86bcb99d0660e01f5c1": "bf011110b7600c4c6bfbc18fe20c0761",
".git/objects/44/7ec9005ea4b0a3f748913cd26dac476f852137": "678cb24397847d695205699d50d330b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/10ba860e66ebbd1028777e07719acaa3202e4f": "2f058168e582bfa3eec4d3e963138a60",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/de78ea85e46a0a6f4620f95b41085279931de3": "ad9cc03f48eed79bafef348e672be7cc",
".git/objects/6e/86672130aac0e4918a028246f39139ae5a99c5": "813698a68796f8a6da80a0ef5df505a1",
".git/objects/9a/e69ac3c44e6f28b670602db973aec4e1332d5f": "fbaf960bb7051ec85a3666c02de65aa4",
".git/objects/9a/94f76ee85146409045b7bae0e278f66a430a59": "9b6dc83987bb7a698a24264efae4853b",
".git/objects/09/20d214a381c0ed0c40d457b92256700de84811": "ec1dcc64014b20ebbb5d41c234cc2da5",
".git/objects/5d/ba5a5e8f05c23660f04b05be47ecbe4449e1c7": "3a95a717bf5856db4a8655930af6fea8",
".git/objects/5d/d55e55d9f9916b664e79b317d2b134c8a5d88e": "3842ad6b5ea1851f85e4472807a4e655",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/72417a91fdd0c1f33b448f176fd51b29886990": "b130a937fad2abe8887e5a28f90ef680",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/30/0d6dea7b4c14fceacc018fedcf41af1490eee9": "42a426e36a5d3946c009e01677249513",
".git/objects/5e/9bdcf8585f9b46b931b62493ac79b7a15ae89e": "83d7fd1768af10606e10e3474f569204",
".git/objects/5b/3e9cd007dce9fae023b30b2c791e122cd932aa": "38abc70897491b801fad3e5e61978192",
".git/objects/37/67d2163147576a568d9213730476af92866bb0": "0140df96c90810739b64c7261a865126",
".git/objects/08/68714351c68e34aa1588224a4fad9664ccd9de": "087c5de874cdaa7804ec6465f52f7617",
".git/objects/08/4da8ca7c2a9224fe5beef4576a1d6c56338c1d": "1f5e2b11de30c047c504eb82a761427c",
".git/objects/01/731b68feabbbbc8c46442ca2ce2076f842279c": "bba2ad09ef2f05952bf4b2061a8f9639",
".git/objects/01/3f71e021729a0298c4389e1ead7672706621c6": "c22875fd79b9f839288b9fd40e60b98e",
".git/objects/97/25a3c192fa3cf79e32de60625e896050d0c101": "a524fa418c6281e1588d789b793390f0",
".git/objects/97/a673ee7658c5bbc7f3d0e9e25d1fa8104e0d45": "048fee49e276ce95b734087859587676",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/9d6c0116783fdb09232d8e8fa71a6e81363d96": "31cc0c226b69f94065944660a97390c3",
".git/objects/a7/4515458d912494bca81c4bca08381118f3dc06": "7691d7dbdffe60ad4e644b879f866b03",
".git/objects/b8/2eef521b93a0b73ffcc18b7993a9a388c73889": "dd634e66e0178c011a431b6feacd658e",
".git/objects/b1/662685eb33cce542cdaf2b606e648ea686c513": "c3cff52eef8b39667383a982d21d632a",
".git/objects/dd/355fcb9eb6f4278fac8051a169d613065757cb": "cac7b344c2c88fae7179f4b02156be9e",
".git/objects/dc/fa1b65570cb546eb6586ebd8261b345d433dc2": "7c668ad10a31e6ee936b6326d3688ce5",
".git/objects/d5/52fb100ccc055e0a0e32f18e6707e638a3793a": "17cf23e474bcabf020b862963ce71c26",
".git/objects/d2/d8dec6a8a6f4500909782eb9d2ef7a77e598b8": "b53471c68c6c5a29df4c31e86b7e0ba8",
".git/objects/aa/aa9d2d6410c092ca8bc5d9d824f73ab80d8c31": "a202421011ea399206bcd36192005ac1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ffb380ce602d53bb5978a69cc91f2835635790": "ee4e2394454afb47acf730953f35723f",
".git/objects/db/57e1da0725fa6baa8e81c5c5b1ce8c0d41925d": "56147282354d375ff15bf5df53abf639",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/ab50c2f2f7af958744b6de37e4ad634e19df3a": "d25715d5dc14c4eb4b9a98f3900334fd",
".git/objects/b0/f497c29006669797137c7ef6542d6eb6f96bd7": "1432ef90f4bd2af2a3b1c8ef56dbafa1",
".git/objects/a6/0c05e455b332753819cfacb61038f5edcb70da": "28f6825ec565cce085843d83648b6084",
".git/objects/a6/47b9ed502eb7523479412f2dcf13277b13ffc7": "a3b3bcea73d4428e5f11e5cd43b65142",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/b1c3b2845083253b08a4bd70948c87be368d8f": "07f602cdf359c81af5b8c6eecbe290bf",
".git/objects/ef/4b8dfe144b4a20d0359ccd1fb438a42e5717ff": "44983c4a1b2504bc97698e4ce786245a",
".git/objects/c4/ce57b16bb265e6aba3aec56d57907f884c2c60": "35f6eeb21f353c2ebc34988211e336c9",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e8/3382b24e4f00d6308f71a4747418891b38f6f4": "af7d2ccf7de09fca8678ea0855fee44d",
".git/objects/e8/bea4c244440afb05dfa287a1d6ecb589c5955c": "cad8285cf8c1118ad6f3bf9b8b90b3c6",
".git/objects/ff/06e9d9ec1f34f24fbc6fa1bc6e94c353c75375": "d23c63b9674ad970e41c507430fdf871",
".git/objects/ff/ce67909892a30ab9d8ea2bc98d6992d55aa263": "c13abe4af2a871bf86e061f9be6d3e32",
".git/objects/c5/4bf21a7e52566573521b5c9b9d1b1173099b53": "8efd75d0067b375bdd5d484193e98bab",
".git/objects/c2/b8aac81d25f2a8f8fbfd4b1994c1c9d7657d1b": "7abf05b9422b2067f3d3b2e868f73514",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/81df0c9dde85472a5b3cccb75c78187f02c80a": "0f8a2c3536a704bfc877e18d3400878b",
".git/objects/f8/2246859d3685df5d5acacdd6d897ba989f2cc9": "370b9bfcdcda68953d8e14cbdc83b59e",
".git/objects/f8/76bbff334ac050ef587b8d50961b6bf155adc5": "37038dedab8ae567a3c8d93d456516ee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/83102374c6908ed82dbb18ab0089f684985129": "4687d42fc2bbeb1e68fdd516a7aba13f",
".git/objects/46/7a9d5c7ff2cbcb79acd9c03952f506a044fd5e": "00e87359f800492851320bfa97bd0375",
".git/objects/2c/3c2803ba1b7fd4135afb3ca7ac917ff03bab6e": "89e2fb245e1c755e771639e81789ec26",
".git/objects/41/a322a2304af7ad9be6fa8939c81e2b2b94cca4": "b63d44404fb6ab8d6bb8f33f93af08a1",
".git/objects/41/725bb9f7b455807fd4f69a79ad7a461104f24e": "0522024310f3c644c0ea06e2581ee0c6",
".git/objects/83/43b0665533a0250e316960020b9ca0fd6ae46b": "0a2f08d57fbe84791c8ea726cb05958e",
".git/objects/70/61f3ec7337ed1142ac045d78e7e5f50a5389fe": "f8172d50f8b2ff1ed23d003ec99f431d",
".git/objects/1e/69b8ee33f845f987511d0d8809a96d5334cef8": "146a2f3c61e73c78f48423515e89c909",
".git/objects/23/d25025b51bf795f847e431d42a187d52132cb1": "82350fd51e67f0a555c007eca82e5e5e",
".git/objects/4f/c50db65b0e250e5abd93becdffe326b48760eb": "330d6a66329bf90b845b0b562ed054a0",
".git/objects/8d/fa13442bec51a0e2337a5377edf4c0583939e0": "d32fe28b32e0f3ef94d0452a22395e95",
".git/objects/15/334217ab0379fdf28a472abd788d384aadce20": "35d7395db8571cad505991cd8cc0fa02",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/b49fbf47e3c54a7582e4ecfd0def2157d3f893": "49996ec814c32a4deed1209e31814a64",
".git/objects/71/86de0e2713c3e72c1175c71e074bf3c6fa5001": "7ab22bdbc07edc3946c72e2c5c7e8a6e",
".git/objects/76/5ff224e0737979d2ef2f3c0176305fed559022": "4c9fd5be7c518475bb5c8ada056f2be2",
".git/objects/76/c597befd194fba057fbf1c10ce9467c85abac0": "f08838e5dad2cff5303b8a946fd18d2b",
".git/objects/76/db9a9c0b885492428556b5477a4cee0756d054": "08c6c81c8fff5a293667f8a90b020ee0",
".git/objects/82/29581101aed2318e94e569e42d17adf850be5b": "8c1ad0ef8bedfbf535f79d93ec9e7f4c",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/ffcb22ceb00aeb92be817585b92d1307d993cf": "ac89250e96a4b1f46bf5fa0a945da3ce",
".git/objects/2e/c1d4bcca98428b46356c6bc591f1d833d576e9": "b0ac8e1da8b6bcf3c3c094a0725d70d3",
".git/objects/8b/ddf6329fc8e59f1e5921110a97d8cf81694cb6": "6de97cfcd2df11086448dcfbf4679b0a",
".git/objects/7a/ecce60ca5eea05a2af0ade1e96c3f5a7c536ad": "0b83ad6fab58014be3d20f510caa0b6b",
".git/objects/7a/96a12308468b7216ee300373903f1172851cf5": "7788ce38a7233414ae4c959eddce3975",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc66f1dd4517769c344bd8ebc620520c",
".git/logs/refs/heads/gh-pages": "656cb752eed1b54eedb979e0de517c64",
".git/logs/refs/remotes/origin/develop": "506555e081322c8f08473ffc68f00c63",
".git/logs/refs/remotes/origin/gh-pages": "07848a160b1a087cc22b683e2cbbe4a7",
".git/logs/refs/remotes/origin/main": "5263b7378cc5d2cb4dbd0d2a900ef61c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "26bcf562ff887d4db77859d37bf5a0b7",
".git/refs/remotes/origin/develop": "7ca59898e20dbfb7aef1cb21fdd3699d",
".git/refs/remotes/origin/gh-pages": "9d27927359b1da7a9fb50947793a3b93",
".git/refs/remotes/origin/main": "dae88fac3831a27f7d334b41da3cbffe",
".git/index": "65b84a8b02861d7a3acc28a5df2014dc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "80d4f7b767d70a55c02daf344fa68c5e",
".git/FETCH_HEAD": "ee4187ab332a77e8b67c5849202bd45e",
"assets/AssetManifest.json": "b2be05566f043d5a4e646acced9b3918",
"assets/NOTICES": "c23d28b08b2dcbea87a478331ff20a2f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "04330c0240e8c09a30f4d423d3f5ab6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/analysis.json": "7704245bd7374f96ba19bd80b388843f",
"assets/AssetManifest.bin": "f304c8b0a04c4399daa192740b2fa73f",
"assets/fonts/MaterialIcons-Regular.otf": "4a9fe20885d1f2ab851685d390129456",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
