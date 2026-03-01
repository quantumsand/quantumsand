# Quantum Sand

When I was studying Physics at the University of London Royal Holloway, I had an idea. What if there was a way to help teach poor kids and adults through an app?

The result of this thought process is now an app that is nearing completion for testing.

Quantum Sand is an everything app, including an educational art-game-storytelling platform. Written in React, Rust, Ruby-on-Rails, C++ and Qml. Blender is used for the artwork.

Quantum Sand is primarily Linux based but I would love to support Windows and macOS. The only blocker is the lack of Wayland compositor support within Qt on those platforms.

A special trick is used to embed Rust videogames into a hovering 3d surface. Until Windows and macOS support Wayland, Windows and macOS will be unable to run Quantum Sand correctly.

Quantum Sand is under the AGPLv3 and CC BY-SA 4.0 licenses.

Non-intrusive privacy-focused geospatial ads are planned within Quantum Sand. The objective is to avoid annoying adverts getting in the way of the learning.

## Storytelling

Within the storytelling of Quantum Sand, the main characters who teach Xenia and Andrew, are Chinese and Japanese.

The Chinese characters are Ai and Zhao.

The Japanese characters are Sakura and Akio.

This reflects a deep fascination with Chinese and Japanese storytelling and artwork over a long period.

Storytelling in videogames such as Link's Awakening, Ocarina of Time and Shenmue have left an impression that has lasted for decades.

## Story examples

* [Quantum Mechanics](quantumsand-story/0003.quantum-mechanics/0001.introduction-to-quantum-mechanics.md)

* [Coding](quantumsand-story/0004.coding/0001.introduction-to-coding.md)

* [Artificial Intelligence](quantumsand-story/0002.artificial-intelligence/0001.introduction-to-artificial-intelligence.md)

* [Mathematics](quantumsand-story/0005.mathematics/0001.introduction-to-mathematics.md)

* [Cybersecurity](quantumsand-story/0006.cybersecurity/0001.introduction-to-cybersecurity.md)

* [Semiconductors](quantumsand-story/0007.semiconductors/0001.introduction-to-semiconductors.md)

* [Biophysics](quantumsand-story/0008.biophysics/0001.introduction-to-biophysics.md)

* [Biochemistry](quantumsand-story/0009.biochemistry/0001.introduction-to-biochemistry.md)

## Live USB stick; STEM programme for Women and Girls

Quantum Sand can be distributed via a Live USB stick. This should help women and girls who are banned from education due to extreme interpretations of various religions. This will turn into the Quantum Sand STEM programme for Women and Girls.

## Video clip of Quantum Sand

[![Quantum Sand Doggo video](https://img.youtube.com/vi/KbqCppxotJI/0.jpg)](https://www.youtube.com/watch?v=KbqCppxotJI)

[![Quantum Sand Doggo video](https://img.youtube.com/vi/ECUVyTuz-cA/0.jpg)](https://www.youtube.com/watch?v=ECUVyTuz-cA)

[![Quantum Sand Doggo video](https://img.youtube.com/vi/Wk7m_2sVfvQ/0.jpg)](https://www.youtube.com/watch?v=Wk7m_2sVfvQ)

[![Quantum Sand video](https://img.youtube.com/vi/8nM9mLc6RTU/0.jpg)](https://www.youtube.com/watch?v=8nM9mLc6RTU)

[![Quantum Sand video](https://img.youtube.com/vi/quEPOkTBCWU/0.jpg)](https://www.youtube.com/watch?v=quEPOkTBCWU)

[![Quantum Sand video](https://img.youtube.com/vi/hljiBX9HST0/0.jpg)](https://www.youtube.com/watch?v=hljiBX9HST0)

[![Quantum Sand video](https://img.youtube.com/vi/-8MeAEXrqzk/0.jpg)](https://www.youtube.com/watch?v=-8MeAEXrqzk)

[![Quantum Sand video](https://img.youtube.com/vi/lsGfLNKV8t4/0.jpg)](https://www.youtube.com/watch?v=lsGfLNKV8t4)

[![Quantum Sand video](https://img.youtube.com/vi/YpqyFqB13g0/0.jpg)](https://www.youtube.com/watch?v=YpqyFqB13g0)

[![Quantum Sand video](https://img.youtube.com/vi/7M_ErOYtT0k/0.jpg)](https://www.youtube.com/watch?v=7M_ErOYtT0k)

These videos only capture part of the overall functionality within Quantum Sand.


## Screenshots of Quantum Sand

Quantum Sand Educational Art Game Storytelling

![Educational Art Game Storytelling](/img/20250810_quantumsand-screenshot.jpg)

Market
![Market](/img/Market.jpg)

Services
![Services](/img/Services.png)

AV
![AV](/img/AV.png)


Mail
![Mail](/img/Mail.png)


Collaborate
![Collaborate](/img/Collaborate.png)


Chirp
![Chirp](/img/Chirp.png)


Audio
![Audio](/img/Audio.png)


Images
![Images](/img/Images.png)


## Target hardware

The target hardware for Quantum Sand is the QALB-Boy which is still in planning. Qalb is the Arabic word for heart. Both physically and spiritually.

Target hardware for Quantum Sand; QALB-Boy specification. More to follow...

![QALB](img/qalb-heart.jpg)
![QALB-Boy](/img/qalb-boy-logo-colours.jpg)
![The-Arabic-word-qalb](/img/The-Arabic-word-qalb-means-heart-both-physically-and-spiritually.jpg)

Hardware ideas (ideally Linux SBCs which are 100GBP or less);

* LimeSDR Mini 2.0 (optional)
* An AMD Ryzen SBC or an AI accelerator SBC (possibly an NVIDIA Jetson Orin Nano Super, or a Chinese alternative).
* More to follow...

Note: The only blocker at present, is reliable Gentoo Linux support. The NVIDIA Jetson Orin Nano is a favourite but Gentoo Linux is an unknown.

Mathpad support is planned...

![Mathpad](img/Mathpad.jpg)

## Scientific equipment drivers

Open source Linux drivers for scientific equipment are being included in Quantum Sand. For example, the Radiacode gamma ray spectrometers enable spectrum visualisation. The ratio between different isotopes can be used to locate gold deposits which are associated with certain isotopes. There are many educational uses for various scientific equipment and it should be usable in Quantum Sand.

Within the storytelling we can combine scientific equipment and measurement with geospatial mapping. You can build a map with colourisation to visualise readings from scientific equipment.

Other scientific apps will also be included for helping to analyse data from scientific equipment.

## Interfaith collaboration

Support for all locales is planned eventually. This should help with interfaith collaboration.

* 🤲 Interfaith collaboration is a planned feature for Quantum Sand.
* 👯 I’m looking to collaborate on Quantum Sand.
* 🤔 I’m looking for help with building a community around Quantum Sand.

## Recommended development hardware

* Apple M1 and later (running macOS) is really easy for development of Quantum Sand. At the moment there is no Wayland or QtWayland. However, every separate component of Quantum Sand can run fine on macOS with no issues.

* Dell Alienware desktops have a good amount of RAM for building components from source. Consider Google’s Chromium and Qt’s WebEngine, which both need a lot of resources for building from source. Additionally, cross-compilation to other cpu architectures like arm64, can be far more time efficient.

* AYANEO Pocket DS; Currently untested. The 16GB RAM models should be able to run Quantum Sand correctly using the Mesa graphics drivers.

## Special thanks

Vital for Quantum Sand;

* Google’s Chromium
* Qt’s WebEngineView and Qml
* Tyson Tan’s friendly dragon art concept
* Dedouze’s unique art style (inspired my own art style)
* Blender (used for the art)
* Twitter Emoji (Twemoji) are licensed under MIT, CC-BY-4.0 licenses.
* MathJax is licensed under the Apache License 2.0
* Hundreds of developers for all of the deps I am using.
