#!/bin/bash


if $(hyprctl devices | grep -q English); then
    hyprctl keyword input:kb_layout no
    notify-send Layout: no
else
    hyprctl keyword input:kb_layout us
    notify-send Layout: us
fi
