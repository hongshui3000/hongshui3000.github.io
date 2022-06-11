.. _spdif_example:

#####################
SPDIF example
#####################

Overview
********

This is a simple SPDIF audio transceiver example. You can plug any source of music and listen to it.

Audio Format
************

The driver requires and provides Audio data with the following parameters:

* 44100 kHz sample rate
* Signed 24 bit PCM
* Stereo
* Little endian

Building
********

.. code-block::

   mkdir build && cd build
   cmake -DBOARD=zc3827_demo ..
   make

Known issues
************

It seems that after a few minutes some music delay occurs, this is because the sound driver is not able to send data as fast as it receives it.
