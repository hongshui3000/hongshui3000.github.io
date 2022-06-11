.. _i2c_ZC_PMU_efuse:

I2C ZC_PMU EFUSE
################

Overview
********
This is a sample app to read and write the ZCAN PMU EFUSE chip via I2C
on the Quark SE Sensor Subsystem.

the slave address of PMU is 0x58.

Building and Running
********************

This project can be built and executed on as follows:

.. zephyr-app-commands::
   :zephyr-app: samples/drivers/i2c_fujitsu_fram
   :host-os: unix
   :board: quark_se_c1000_devboard
   :goals: run
   :compact:


Sample Output
=============

.. code-block:: console

    Data comparison successful.
