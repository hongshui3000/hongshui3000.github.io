.. _Ethermind_hello_world:

Ethermind Hello World
#####################

Overview
********

A simple sample that can be used with any :ref:`supported board <boards>` and
prints "Hello World" to the console.

Building and Running
********************

This application can be built and executed on ZC3827 Demo as follows:

.. zephyr-app-commands::
   :zephyr-app: samples/bluetooth/ethermind
   :host-os: unix
   :board: zc3827_demo
   :goals: run
   :compact:

To build for another board, change "zc3827_demo" above to that board's name.

Sample Output
=============

.. code-block:: console

    ethermind Hello World! zc3827_demo


