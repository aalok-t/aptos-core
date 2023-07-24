// Copyright © Aptos Foundation

use image::ImageFormat;

pub struct ImageOptimizer;

impl ImageOptimizer {
    /// Resizes and optimizes image from input URI.
    /// Returns new image as a byte array and its format.
    pub async fn optimize(_uri: String) -> anyhow::Result<Option<(Vec<u8>, ImageFormat)>> {
        todo!();
    }
}
