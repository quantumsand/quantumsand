cmake_minimum_required(VERSION 4.3.0)
INCLUDE (CheckIncludeFiles)

project(quantumsand)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)
set(QT_VERSION_MAJOR 6.2.0)

find_package(Qt6 COMPONENTS Core Widgets Quick Quick3D WebEngineCore WebEngineWidgets WebEngineQuick Multimedia WebChannel WebSockets REQUIRED)

add_executable(quantumsand
    main.cpp
    qml.qrc
)

target_link_libraries(quantumsand Qt6::Core Qt6::Gui Qt6::Widgets Qt6::Quick Qt6::Quick3D Qt6::WebEngineCore Qt::WebEngineQuick Qt6::Multimedia Qt6::WebChannel Qt6::WebSockets)
