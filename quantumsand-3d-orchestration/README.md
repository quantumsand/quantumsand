# Quantum Sand 3d Orchestration

A RubyGem for defining the 3d layout of Quantum Sand.

Quantum Sand 3d orchestration directs the layout of the 3d Qml scene within the Qt app.

This is based on the context of the current playing media.

This RubyGem will generate a JSON payload as a scene description.

The JSON parser within `quantumsand-qt` will create a `View3D` and then create only known, whitelisted Qt Quick 3D types from the payload.

This RubyGem supplies the JSON payload to the scene builder within `quantumsand-qt`.

The JSON parser within `quantumsand-qt` will be initially implemented in JavaScript but should eventually be replaced with C++ and expose a `SceneBuilder` QObject to Qml.
