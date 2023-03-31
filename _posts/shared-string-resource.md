---
title: 'Share iOs string resources with Android'
excerpt: "There might be a requirement for mobile string resources to be defined or adjusted by management or
copywriters. There also
might be a requirement to add localization later by those roles. And on top of that strings should be synced across
platforms."
coverImage: '/assets/blog/post/shared-string/cover.jpg'
date: '2023-04-03T00:00:00.000Z'
metaData:
    name: Android
    picture: '/assets/blog/meta/android_logo_128.png'
    tags: ['android','resources','shared','poeditor']
ogImage:
    url: '/assets/blog/post/shared-string/cover.jpg'
ogTitle: "Share iOs string resources with Android"
---

# Why to share string resources

There might be a requirement for mobile string resources to be defined or adjusted by management or copywriters. There
also
might be a requirement to add localization later by those roles. And on top of that the requirement to have strings
synced across platforms.

**And here we are.**  
This points to some localization platform and translation management system.

# Localization platforms

There is a plenty of localization platforms. Let's mention some:

* [Phrase](https://phrase.com/)
* [PoEditor](https://poeditor.com/)
* [Lokalise](https://lokalise.com/)
* [Transifex](https://www.transifex.com/)
* [Crowdin](https://crowdin.com/)
* ...

Now skip doing research and comparing those platforms.

**Let's assume** circumstances have chosen the **PoEditor** variant. And on top of that, it was decided to **import all strings
from iOS** including iOS specific string resource keys and parameter placeholders. In order to spare money and use
free tier to maximum, **Android should use imported iOS variants**.

# Integrate PoEditor in Android project standard way

There are some tips
on [how to translate iOs and Android apps in the same project](https://poeditor.com/kb/how-to-keep-ios-and-android-strings-in-the-same-localization-project).

There are also [plugins](https://github.com/hyperdevs-team/poeditor-android-gradle-plugin) treating standard situations.

But what if you are in the situation described above, so you have to **convert keys, parameters, split strings to
modules, etc.**

# Integrate PoEditor in Android project custom way

For situation when there is a need for custom data post-processing, **the way is to create customized convention
plugin** and implement any processing specifically to our project needs.

Anyone interested in implementation details can check following simplified PoEditor Android plugin for specific project
needs: [Kotox AndroidPoeditorPlugin](https://github.com/kotoMJ/kotox-android/blob/main/build-logic/README-POEDITOR.md)
