//! Loads and renders a Blender glTF file as a scene.

use bevy::{
    color::palettes::css::RED,
    light::{CascadeShadowConfigBuilder, DirectionalLightShadowMap, VolumetricLight},
    prelude::*,
};
use std::f32::consts::*;

// Define a struct to store parameters for the point light's movement.
#[derive(Component)]
struct MoveBackAndForthHorizontally {
    min_x: f32,
    max_x: f32,
    speed: f32,
}

fn main() {
    App::new()
        .insert_resource(DirectionalLightShadowMap { size: 4096 })
        .add_plugins(DefaultPlugins)
        .add_systems(Startup, setup)
        .add_systems(Update, animate_light_direction)
        .add_systems(Update, move_point_light)
        .run();
}

fn setup(mut commands: Commands, asset_server: Res<AssetServer>) {
    commands.spawn((
        // Camera3d::default(), // currently we are loading the camera from the Blender gltf.
    ));

    commands.spawn((
        DirectionalLight {
            shadows_enabled: true,
            ..default()
        },
        // This is a relatively small scene, so use tighter shadow
        // cascade bounds than the default for better quality.
        // We also adjusted the shadow map to be larger since we're
        // only using a single cascade.
        CascadeShadowConfigBuilder {
            num_cascades: 1,
            maximum_distance: 1.6,
            ..default()
        }
        .build(),
    ));
    commands.spawn(SceneRoot(asset_server.load(
        GltfAssetLabel::Scene(0).from_asset("models/hakoniwa-level-001.gltf"),
    )));
    // Add the point light
    commands.spawn((
        Transform::from_xyz(3.0, 3.0, 5.0),
        PointLight {
            shadows_enabled: true,
            range: 300.0,
            color: RED.into(),
            intensity: 3_000_000.0,
            ..default()
        },
        VolumetricLight,
        MoveBackAndForthHorizontally {
            min_x: 2.00,
            max_x: 18.0,
            speed: -2.0,
        },
    ));
}

fn animate_light_direction(
    time: Res<Time>,
    mut query: Query<&mut Transform, With<DirectionalLight>>,
) {
    for mut transform in &mut query {
        transform.rotation = Quat::from_euler(
            EulerRot::ZYX,
            0.0,
            time.elapsed_secs() * PI / 5.0,
            -FRAC_PI_4,
        );
    }
}

// Toggle point light movement between left and right.
fn move_point_light(
    timer: Res<Time>,
    mut objects: Query<(&mut Transform, &mut MoveBackAndForthHorizontally)>,
) {
    for (mut transform, mut move_data) in objects.iter_mut() {
        let mut translation = transform.translation;
        let mut need_toggle = false;
        translation.x += move_data.speed * timer.delta_secs();
        if translation.x > move_data.max_x {
            translation.x = move_data.max_x;
            need_toggle = true;
        } else if translation.x < move_data.min_x {
            translation.x = move_data.min_x;
            need_toggle = true;
        }
        if need_toggle {
            move_data.speed = -move_data.speed;
        }
        transform.translation = translation;

        //println!("move_point_light firefly x: {}", translation.x); // can be useful...
    }
}
