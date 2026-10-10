---
title: "DriveGuard - Vehicle Warning System"
summary: "Classical computer vision system that detects traffic signs and pedestrians in dashcam video and raises driver warnings."
tags: ["Python", "OpenCV", "Computer Vision", "HOG + SVM"]
order: 5
featured: true
code: "https://github.com/duelHunter/drive_guard"
---

## Overview

A vision-based driver warning system that processes road-scene video and raises alerts when a stop sign, speed limit sign, pedestrian crossing sign or a pedestrian is detected. About 80% of the pipeline uses classical image processing rather than deep learning.

## Pipeline

- **Preprocessing:** denoising, colour space conversion and CLAHE for illumination compensation.
- **Traffic sign detection:** HSV colour segmentation, geometric filtering, then HOG features for classification.
- **Pedestrian detection:** HOG descriptors with a linear SVM.
- **Warnings:** visual overlays and audio alerts for high-risk events.
- **Stability:** optional Kalman filter tracking across frames.

## Evaluation

Performance is measured with precision, recall, F1-score and frames per second.
