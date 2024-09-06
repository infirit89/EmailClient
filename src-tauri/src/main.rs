// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{thread::sleep, time::Duration};

use tauri::{Manager, Window};

#[tauri::command]
async fn show_window(window: Window) {
    // Show main window
    sleep(Duration::from_millis(500));
    window
        .get_window("main")
        .expect("no window labeled 'main' found")
        .show()
        .unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![show_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
