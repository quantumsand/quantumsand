/****************************************************************************
**
** Copyright (C) 2018 The Qt Company Ltd.
** Contact: http://www.qt-project.org/legal
**
** This file is part of the examples of the Qt Toolkit.
**
** $QT_BEGIN_LICENSE:BSD$
** Commercial License Usage
** Licensees holding valid commercial Qt licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and The Qt Company. For licensing terms
** and conditions see https://www.qt.io/terms-conditions. For further
** information use the contact form at https://www.qt.io/contact-us.
**
** BSD License Usage
** Alternatively, you may use this file under the terms of the BSD license
** as follows:
**
** "Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are
** met:
**   * Redistributions of source code must retain the above copyright
**     notice, this list of conditions and the following disclaimer.
**   * Redistributions in binary form must reproduce the above copyright
**     notice, this list of conditions and the following disclaimer in
**     the documentation and/or other materials provided with the
**     distribution.
**   * Neither the name of The Qt Company Ltd nor the names of its
**     contributors may be used to endorse or promote products derived
**     from this software without specific prior written permission.
**
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
** "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
** LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
** A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
** OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
** LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
** DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
** THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
** (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
**
** $QT_END_LICENSE$
**
****************************************************************************/

/***************************************************************************
** Copyright 2023 Andrew James Potter
** AGPLv3
****************************************************************************/

import QtQuick
// import QtWayland.Compositor 1.15
// import QtWayland.Compositor.XdgShell
import QtQuick.Window 2.3
import QtQuick.Controls 2.0
import QtQuick3D
import QtQuick3D.Helpers
import QtWebEngine 1.9
import QtWebChannel 1.14
import "vars.js" as Global

ApplicationWindow {
    width: 1280
    height: 720
    visible: true
    id: window
    Rectangle {
        // sizeFollowsWindow: true
            //window: Window {
            id: win

            property int pixelWidth: width * screen.devicePixelRatio
            property int pixelHeight: height * screen.devicePixelRatio
            property bool showGridPresentation: false
            property bool showGridBackground: false
            property bool showTopOverlay: false
            property bool showNotifications: false
            property bool showWallpaper: true
            property bool altView: false

            visible: true
            width: window.width
            height: window.height

            WebEngineView {
                id: webengine_presentation
                url: Global.quantumsandEndpoint + "/video-slide"
                width: 1280
                height: 720
                layer.enabled: true
                layer.smooth: true

                focus: true

                visible: true
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true
                settings.playbackRequiresUserGesture: false
                settings.showScrollBars: false
                backgroundColor: "transparent"
                antialiasing: true

                profile: WebEngineProfile {
                    storageName: "Profile"
                    offTheRecord: true
                }

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /video-slide")
                    }
                }

                WebEngineView {
                    id: webengine_presentation_slides
                    width: 1280
                    height: 720
                    anchors.fill: parent
                    z: 100

                    visible: true
                    url: Global.quantumsandEndpoint + "/slides"
                    settings.accelerated2dCanvasEnabled: true
                    settings.webGLEnabled: true
                    settings.playbackRequiresUserGesture: false
                    settings.showScrollBars: false
                    backgroundColor: "transparent"
                    antialiasing: true

                    profile: WebEngineProfile {
                        storageName: "Profile"
                        offTheRecord: true
                    }

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /slides")
                        }
                    }
                }
            }

            WebEngineView {
                id: webengine_presentation_quaternary
                width: 1280
                height: 720
                anchors.fill: parent
                z: 100

                layer.enabled: true
                layer.smooth: true

                visible: true
                url: Global.quantumsandEndpoint + "/slides-secondary"
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true
                settings.playbackRequiresUserGesture: false
                settings.showScrollBars: false
                backgroundColor: "transparent"
                antialiasing: true

                profile: WebEngineProfile {
                    storageName: "Profile"
                    offTheRecord: true
                }

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /slides-secondary")
                    }
                }
            }

            WebEngineView {
                id: webengine_presentation_secondary
                url: Global.quantumsandEndpoint + "/video-slide"
                width: 1280
                height: 720
                layer.enabled: true
                layer.smooth: true
                focus: true

                WebEngineView {
                    id: webengine_presentation_secondary_slides_secondary
                    width: 1280
                    height: 720
                    anchors.fill: parent
                    z: 100

                    visible: true
                    url: Global.quantumsandEndpoint + "/slides-thirdly"
                    settings.accelerated2dCanvasEnabled: true
                    settings.webGLEnabled: true
                    settings.playbackRequiresUserGesture: false
                    settings.showScrollBars: false
                    backgroundColor: "transparent"
                    antialiasing: true

                    profile: WebEngineProfile {
                        storageName: "Profile"
                        offTheRecord: true
                    }

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /slides-secondary")
                        }
                    }

                    WebEngineView {
                        id: webengine_presentation_alt
                        width: 1280
                        height: 720
                        anchors.fill: parent
                        z: 100

                        visible: win.altView
                        url: Global.quantumsandEndpoint + "/geotimeline"
                        settings.accelerated2dCanvasEnabled: true
                        settings.webGLEnabled: true
                        settings.playbackRequiresUserGesture: false
                        settings.showScrollBars: false
                        backgroundColor: "transparent"
                        antialiasing: true

                        profile: WebEngineProfile {
                            storageName: "Profile"
                            offTheRecord: true
                        }

                        onLoadingChanged: function(loadRequest) {
                            if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                                console.log("Loaded /altview")
                            }
                        }
                    }
                }
            }

            WebEngineView {
                id: webengine_video_narrative
                url: Global.quantumsandEndpoint + "/video-narrative"
                width: 1280
                height: 720
                layer.enabled: true
                layer.smooth: true
                focus: true

                visible: true
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true
                settings.playbackRequiresUserGesture: false
                settings.showScrollBars: false
                backgroundColor: "transparent"
                antialiasing: true

                profile: WebEngineProfile {
                    storageName: "Profile"
                    offTheRecord: true
                }

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /video-narrative")
                    }
                }

                WebEngineView {
                    id: webengine_video_narrative_overlay
                    width: 1280
                    height: 720
                    opacity: 0.85
                    anchors.fill: parent
                    z: 100

                    visible: true // TODO: REWORK THIS
                    url: Global.quantumsandEndpoint + "/narrator"
                    settings.accelerated2dCanvasEnabled: true
                    settings.webGLEnabled: true
                    settings.playbackRequiresUserGesture: false
                    settings.showScrollBars: false
                    backgroundColor: "transparent"
                    antialiasing: true

                    profile: WebEngineProfile {
                        storageName: "Profile"
                        offTheRecord: true
                    }

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /narrator")
                        }
                    }
                }
            }

            WebEngineView {
                id: webengine_dynamic
                z: 0
                x: 0
                anchors.top: webengine_ribbon.bottom
                width: parent.width
                height: parent.height - y
                url: Global.quantumsandEndpoint + "/dynamic"
                settings.accelerated2dCanvasEnabled: true
                settings.showScrollBars: false
                settings.webGLEnabled: true
                visible: true

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /dynamic")
                    }
                }

                onFeaturePermissionRequested: {
                    console.log("onFeaturePermissionRequested: " + securityOrigin + "; " + feature)
                    grantFeaturePermission(securityOrigin, feature, true);
                }

                profile: WebEngineProfile {
                    storageName: "Profile"
                    offTheRecord: true
                    onPresentNotification: {
                    console.log("Notification", Notification.status)
                    }
                }

                enabled: true
            }

            Rectangle {
                id: grid_rectangle
                layer.enabled: true
                z: win.showGridBackground ? 100 : -100
                anchors.top: webengine_ribbon.bottom
                anchors.bottom: parent.bottom
                anchors.right: parent.right
                anchors.left: parent.left

                Grid {
                    id: grid
                    layer.enabled: true
                    // property variant items: []

                    property bool overview: true
                    property int selected: 0
                    property int selectedColumn: selected % columns
                    property int selectedRow: selected / columns

                    anchors.fill: parent

                    columns: Math.ceil(Math.sqrt(toplevels.count))
                    transform: [
                        Scale {
                            xScale: grid.overview ? (1.0/grid.columns) : 1
                            yScale: grid.overview ? (1.0/grid.columns) : 1
                            Behavior on xScale { PropertyAnimation { easing.type: Easing.InOutQuad; duration: 200 } }
                            Behavior on yScale { PropertyAnimation { easing.type: Easing.InOutQuad; duration: 200 } }
                        },
                        Translate {
                            x: grid.overview ? 0 : win.width * -grid.selectedColumn
                            y: grid.overview ? 0 : win.height * -grid.selectedRow
                            Behavior on x { PropertyAnimation { easing.type: Easing.InOutQuad; duration: 200 } }
                            Behavior on y { PropertyAnimation { easing.type: Easing.InOutQuad; duration: 200 } }
                        }
                    ]

                    Repeater {
                        id: repeater
                        model: toplevels
                        Item {
                            id: repeaterItem
                            width: win.width
                            height: win.height
                            // ShellSurfaceItem {
                            //     anchors.fill: parent
                            //     shellSurface: xdgSurface
                            //     autoCreatePopupItems: true
                            //     onSurfaceDestroyed: toplevels.remove(index)
                            // }

                            MouseArea {
                                enabled: grid.overview
                                anchors.fill: parent
                                onClicked: {
                                    console.log(index);
                                    grid.selected = index;
                                    grid.overview = false;
                                }
                            }
                        }
                    }
                }

                // interactive overlay
                WebEngineView {
                    id: webengine_interactive_overlay
                    width: 1280
                    height: 720
                    opacity: 0.85
                    z: 1000
                    anchors.fill: parent

                    visible: true
                    url: Global.quantumsandEndpoint + "/videogame-title"
                    settings.accelerated2dCanvasEnabled: true
                    settings.webGLEnabled: true
                    settings.playbackRequiresUserGesture: false
                    settings.showScrollBars: false
                    backgroundColor: "transparent"
                    antialiasing: true

                    profile: WebEngineProfile {
                        storageName: "Profile"
                        offTheRecord: true
                    }

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /narrator for interactive overlay")
                        }
                    }
                }
            }

            WebEngineView {
                id: webengine_wallpaper
                x: 0
                y: 0
                z: 101
                width: win.width
                height: win.height - webengine_ribbon.height
                anchors.top: webengine_ribbon.bottom
                url: Global.quantumsandEndpoint + "/wallpaper"
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true
                settings.playbackRequiresUserGesture: false

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /wallpaper")
                    }
                }

                enabled: true
                visible: win.showWallpaper

                WebEngineView {
                    id: webengine_particles
                    visible: false  // TODO: Re-enable
                    x: 0
                    y: 0
                    z: 101
                    width: win.width
                    height: win.height - webengine_ribbon.height
                    anchors.top: webengine_ribbon.bottom
                    url: Global.quantumsandEndpoint + "/particles"
                    settings.accelerated2dCanvasEnabled: true
                    settings.webGLEnabled: true
                    settings.playbackRequiresUserGesture: false
                    backgroundColor: "transparent"
                    enabled: false
                }
            }

            Shortcut { sequence: "v"; onActivated: {
                grid.overview = !grid.overview;
            }}

            Shortcut { sequence: "space"; onActivated: {
                // TODO: play!!
                console.log("Play/Pause");
            }}
            Shortcut { sequence: "return"; onActivated: grid.overview = !grid.overview }
            Shortcut { sequence: "right"; onActivated: grid.selected = Math.min(grid.selected+1, toplevels.count-1) }
            Shortcut { sequence: "left"; onActivated: grid.selected = Math.max(grid.selected-1, 0) }
            Shortcut { sequence: "up"; onActivated: grid.selected = Math.max(grid.selected-grid.columns, 0) }
            Shortcut { sequence: "down"; onActivated: grid.selected = Math.min(grid.selected+grid.columns, toplevels.count-1) }
            Shortcut { sequence: "o"; onActivated: {
                model_left_panel.state = "opened";
                model_right_panel.state = "opened";
                model_additional_panel.state = "opened";
                model_additional_panel_quaternary.state = "opened";
                webengine_context.visible = false;
                controls.visible = false;
                qr_code.visible = false;
                subtitles.visible = false;
                advert.visible = false;
            }}
            Shortcut { sequence: "c"; onActivated: {
                model_left_panel.state = "closed";
                model_right_panel.state = "closed";
                model_additional_panel.state = "closed";
                model_additional_panel_quaternary.state = "closed";
                webengine_context.visible = true;
                controls.visible = true;
                qr_code.visible = true;
                subtitles.visible = true;
                advert.visible = true;
            }}
            Shortcut { sequence: "s"; onActivated: {
                model_left_panel.state = "secondary";
                model_right_panel.state = "secondary";
                model_additional_panel.state = "secondary";
                model_additional_panel_quaternary.state = "secondary";
                webengine_context.visible = true;
                controls.visible = true;
                qr_code.visible = true;
                subtitles.visible = true;
                advert.visible = true;
            }}
            Shortcut { sequence: "r"; onActivated: {
                webengine_presentation_slides.visible = !webengine_presentation_slides.visible;
            }}
            Shortcut { sequence: "g"; onActivated: {
                win.showGridPresentation = !win.showGridPresentation;
            }}
            Shortcut { sequence: "b"; onActivated: {
                win.showGridBackground = !win.showGridBackground;
            }}
            Shortcut { sequence: "t"; onActivated: {
                win.showTopOverlay = !win.showTopOverlay;
            }}
            Shortcut { sequence: "n"; onActivated: {
                win.showNotifications = !win.showNotifications;
            }}
            Shortcut { sequence: "w"; onActivated: {
                win.showWallpaper = !win.showWallpaper;
            }}
            Shortcut { sequence: "a"; onActivated: {
                win.altView = !win.altView;
            }}
            Shortcut { sequence: "e"; onActivated: {
                webengine_presentation_alt.url = Global.quantumsandEndpoint + "/ebook"
            }}
            Shortcut { sequence: "h"; onActivated: {
                webengine_presentation_alt.url = Global.quantumsandEndpoint + "/geotimeline"
            }}
            Shortcut { sequence: "q"; onActivated: {
                webengine_presentation_alt.url = Global.quantumsandEndpoint + "/virtualglobe"
            }}

            WebEngineView {
                id: webengine_ribbon
                x: 0
                y: 0
                z: 1001
                width: parent.width
                height: 152
                url: Global.quantumsandEndpoint + "/context"
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /context")
                    }
                }

                enabled: true

                WebEngineView {
                    id: webengine_context
                    x: 0
                    y: 0
                    z: 1002
                    width: parent.width
                    height: 152
                    url: Global.quantumsandEndpoint + "/context"
                    settings.accelerated2dCanvasEnabled: true
                    settings.webGLEnabled: true
                    settings.playbackRequiresUserGesture: false

                    profile: WebEngineProfile {
                        storageName: "Profile"
                        offTheRecord: true
                    }

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /context")
                        }
                    }

                    enabled: true
                    visible: false
                }
            }

            Rectangle {
                id: advert
                width: 370
                height: 180
                anchors.bottom: parent.bottom
                anchors.left: parent.left
                anchors.margins: 10
                color: "transparent"
                z: 1001

                Rectangle {
                    anchors.fill: parent
                    color: "transparent"

                    WebEngineView {
                        id: webengine_advert
                        anchors.fill: parent
                        antialiasing: true
                        url: Global.quantumsandEndpoint + "/adverts"
                        opacity: 0.9
                        settings.showScrollBars: false
                        settings.playbackRequiresUserGesture: false
                        backgroundColor: "transparent"

                        onJavaScriptConsoleMessage: {
                            console.log(message)
                        }

                        profile: WebEngineProfile {
                            storageName: "Profile"
                            offTheRecord: true
                        }
                    }
                }
            }

            Rectangle {
                id: subtitles
                height: 180
                anchors.bottom: parent.bottom
                anchors.left: advert.right
                anchors.right: controls.left
                anchors.bottomMargin: 10
                anchors.leftMargin: 10
                anchors.rightMargin: 10
                color: "transparent"
                z: 1001

                WebEngineView {
                    //enabled: false
                    anchors.fill: parent
                    anchors.horizontalCenter: subtitles.horizontalCenter
                    opacity: 0.8
                    url: Global.quantumsandEndpoint + "/subtitles"
                    settings.showScrollBars: false
                    backgroundColor: "transparent"

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /subtitles")
                        }
                    }

                    // Experimental mouse area code
                    // MouseArea {
                    //     anchors.fill: parent
                    //     // hoverEnabled: true
                    //     z: parent.z + 1
                    //     propagateComposedEvents: true
                    //     // scrollGestureEnabled: false
                    //     onClicked: (mouse)=> {
                    //         console.log("clicked subtitles")
                    //         mouse.accepted = true
                    //     }
                    //     onWheel: (mouse)=> {
                    //         mouse.accepted = false
                    //         console.log("Mouse wheel blocked");
                    //     }
                    // }
                }

                // MouseArea {
                //     z: parent.z + 1
                //     anchors.fill: parent
                //     propagateComposedEvents: true
                //     onClicked: (mouse)=> {
                //         console.log("clicked subtitles")
                //         mouse.accepted = false
                //     }
                // }
            }

            Rectangle {
                id: qr_code
                anchors.bottom: parent.bottom
                anchors.right: parent.right
                anchors.margins: 10
                height: 180
                width: 180
                color: "transparent"
                z: 1001

                WebEngineView {
                    anchors.fill: parent
                    anchors.horizontalCenter: controls.horizontalCenter
                    opacity: 1.0
                    url: Global.quantumsandEndpoint + "/barcode"
                    backgroundColor: "transparent"

                    onLoadingChanged: function(loadRequest) {
                        if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                            console.log("Loaded /barcode")
                        }
                    }
                }
            }

            Rectangle {
                id: controls
                width: 180
                height: 180
                anchors.bottom: parent.bottom
                anchors.right: qr_code.left
                anchors.margins: 10
                color: "transparent"
                z: 1001

                Rectangle {
                    id: tvcontrols
                    height: 180
                    width: 180
                    anchors.bottom: parent.bottom
                    anchors.left: subtitles.right
                    anchors.right: qr_code.left
                    color: "transparent"

                    WebEngineView {
                        anchors.fill: parent
                        anchors.horizontalCenter: controls.horizontalCenter
                        opacity: 0.8
                        url: Global.quantumsandEndpoint + "/avcontrols"
                        settings.showScrollBars: false
                        backgroundColor: "transparent"

                        onLoadingChanged: function(loadRequest) {
                            if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                                console.log("Loaded /avcontrols")
                            }
                        }
                    }
                }
            }

            WebEngineView {
                id: notifications
                height: 180
                width: 530
                anchors.right: parent.right
                anchors.top: webengine_ribbon.bottom
                opacity: 1.0
                z: 2000
                url: Global.quantumsandEndpoint + "/notifications"
                visible: win.showNotifications
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true
                settings.showScrollBars: false
                backgroundColor: "transparent"

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /notifications")
                    }
                }
            }

            WebEngineView {
                id: topOverlay
                anchors.fill: parent
                opacity: 1.0
                z: 2001
                url: Global.quantumsandEndpoint + "/loading"
                visible: win.showTopOverlay
                settings.accelerated2dCanvasEnabled: true
                settings.webGLEnabled: true
                enabled: false

                onLoadingChanged: function(loadRequest) {
                    if (loadRequest.status === WebEngineView.LoadSucceededStatus) {
                        console.log("Loaded /loading")
                    }
                }

                onContextMenuRequested: {
                    request.accepted = true;
                }
            }

            View3D {
                id: view_3d
                z: 1000
                anchors.fill:parent
                renderMode: View3D.Offscreen
                antialiasing: true
                visible: true

                Node {
                    id: panelRoot
                    property PerspectiveCamera activeCamera: camera

                    PointLight {
                        id: lamp
                        x: 180
                        y: 100
                        z: -100
                        color: "#ffffffff"
                        linearFade: 1
                        brightness: 25
                    }

                    PointLight {
                        id: narrative_secondary_lamp
                        x: 179
                        y: 95.5
                        z: 350
                        color: "#ffffffff"
                        linearFade: 1
                        brightness: 5
                    }

                    PerspectiveCamera {
                        id: camera

                        x: 180.067
                        y: 225.598
                        z: -411.521
                        eulerRotation.x: 0

                        eulerRotation.y: 180

                        fieldOfViewOrientation: PerspectiveCamera.Horizontal
                    }

                    Model {
                        id: model_left_panel
                        objectName: "left panel"
                        pivot.x: 0
                        eulerRotation.y: 20
                        x: 360
                        y: 240
                        z: 270
                        scale.x: 3.5
                        scale.y: 1.98
                        scale.z: 0.1

                        source: "#Cube"
                        materials: [ DefaultMaterial {
                                            diffuseMap: Texture {
                                                id: texture_presentation
                                                sourceItem: win.showGridPresentation ? grid_rectangle : webengine_presentation
                                                // flipV: true
                                            }
                                        }
                                    ]
                        pickable: true

                        states: [
                            State {
                            name: "opened"
                            PropertyChanges {
                                target: model_left_panel
                                eulerRotation.y: 90
                                x: -1000
                            }},
                            State {
                                name: "secondary"
                                PropertyChanges {
                                    target: model_left_panel
                                }
                            }
                        ]
                        transitions: Transition {
                            to: "opened"
                            reversible: true
                            SequentialAnimation {
                                PropertyAnimation { property: "eulerRotation.y"; duration: 500 }
                                PropertyAnimation { property: "x"; duration: 1000 }
                            }
                        }
                    }

                    Model {
                        id: model_right_panel
                        objectName: "right panel"
                        x: 0
                        y: 240
                        eulerRotation.y: -20
                        scale.x: 3.5
                        scale.y: 1.9844
                        scale.z: 0.1
                        z: 270
                        pivot.x: 0
                        source: "#Cube"
                        pickable: true
                        materials: [ DefaultMaterial {
                                            diffuseMap: Texture {
                                                id: texture_video
                                                sourceItem: webengine_video_narrative
                                            }
                                        }
                                    ]

                        states: [
                            State {
                            name: "opened"
                            PropertyChanges {
                                target: model_right_panel
                                eulerRotation.y: -90
                                x: 1000
                                scale.x: 3.5
                                scale.y: 1.98
                                scale.z: 0.1
                            }},
                            State {
                            name: "secondary"
                            PropertyChanges {
                                target: model_right_panel // TODO: COPY OVER TO LINUX
                                eulerRotation.y: 0
                                x: 179
                                y: 310
                                scale.x: 1.33
                                scale.y: 0.725
                                scale.z: 0.1
                                z: 250
                            }
                        }]
                        transitions: [
                            Transition {
                            to: "opened"
                            reversible: true
                            SequentialAnimation {
                                PropertyAnimation { properties: "eulerRotation.y, scale.x,scale.y"; duration: 500 }
                                PropertyAnimation { properties: "x,y,z"; duration: 1000 }
                            }
                        },
                        Transition {
                            to: "secondary"
                            reversible: true
                            SequentialAnimation {
                                PropertyAnimation { properties: "eulerRotation.y, scale.x,scale.y"; duration: 500 }
                                PropertyAnimation { properties: "x,y,z"; duration: 1000 }
                            }
                        }
                        ]
                    }

                    Model {
                        id: model_additional_panel
                        objectName: "extra panel"
                        pivot.x: 0
                        eulerRotation.y: 20
                        x: -1000
                        y: 120
                        z: 200
                        scale.x: 3.5
                        scale.y: 1.98
                        scale.z: 0.1

                        source: "#Cube"
                        materials: [ DefaultMaterial {
                                            diffuseMap: Texture {
                                                id: texture_presentation_secondary
                                                sourceItem: webengine_presentation_secondary
                                                // flipV: true
                                            }
                                        }
                                    ]
                        pickable: true

                        states: [
                            State {
                            name: "opened"
                            PropertyChanges {
                                target: model_additional_panel
                                eulerRotation.y: -90
                                x: 1000
                                scale.x: 3.5
                                scale.y: 1.98
                                scale.z: 0.1
                            }},
                            State {
                            name: "secondary"
                            PropertyChanges {
                                target: model_additional_panel
                                x: 0
                                y: 240
                                eulerRotation.y: -20
                                scale.x: 3.5
                                scale.y: 1.9844
                                scale.z: 0.1
                                z: 270
                                pivot.x: 0
                            }
                        }]
                        transitions: Transition {
                            to: "secondary"
                            reversible: true
                            SequentialAnimation {
                                PropertyAnimation { properties: "eulerRotation.y, scale.x,scale.y"; duration: 500 }
                                PropertyAnimation { properties: "x,y"; duration: 1000 }
                            }
                        }
                    }

                    Model {
                        id: model_additional_panel_quaternary
                        objectName: "extra panel quaternary"
                        pivot.x: 0
                        eulerRotation.y: 20
                        x: +1000
                        y: 0
                        z: 200
                        scale.x: 3.5
                        scale.y: 1.98
                        scale.z: 0.1

                        source: "#Cube"
                        materials: [ DefaultMaterial {
                                            diffuseMap: Texture {
                                                id: texture_presentation_quaternary
                                                sourceItem: webengine_presentation_quaternary
                                                // flipV: true
                                            }
                                        }
                                    ]
                        pickable: true

                        states: [
                            State {
                            name: "opened"
                            PropertyChanges {
                                target: model_additional_panel_quaternary
                                eulerRotation.y: -90
                                x: 1000
                                scale.x: 3.5
                                scale.y: 1.98
                                scale.z: 0.1
                            }},
                            State {
                            name: "secondary"
                            PropertyChanges {
                                target: model_additional_panel_quaternary
                                eulerRotation.y: 0
                                x: 179
                                y: 165
                                scale.x: 1.33
                                scale.y: 0.725
                                scale.z: 0.1
                                z: 250
                            }
                        }]
                        transitions: Transition {
                            to: "secondary"
                            reversible: true
                            SequentialAnimation {
                                PropertyAnimation { properties: "eulerRotation.y, scale.x,scale.y"; duration: 500 }
                                PropertyAnimation { properties: "x,y"; duration: 1000 }
                            }
                        }
                    }
                }
           // }
        }
    }

    ListModel { id: toplevels }

    // XdgShell {
    //     onToplevelCreated: {
    //         toplevels.append({xdgSurface});
    //         toplevel.sendFullscreen(Qt.size(win.pixelWidth, win.pixelHeight));
    //     }
    // }
}
