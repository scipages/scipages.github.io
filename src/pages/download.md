---
title: Download SciPages
currentRelease: 0.0.1
---

# Download SciPages

> Start editing your website on Windows, Linux or macOS

| Platform                                                              | Checksum |
|-----------------------------------------------------------------------|----------|
| [Download for Windows](https://github.com/scipages/scipages/releases) |          |
| [Download for Linux](https://github.com/scipages/scipages/releases)   |          |
| [Download for macOS](https://github.com/scipages/scipages/releases)   |          |

<>Current release: <b>{frontMatter.currentRelease}</b></>

To download older releases, visit the [Releases Page](https://github.com/scipages/scipages/releases).

## Windows Installation Instructions

When you click on the installer .exe file in Windows 10,
a `Microsoft Defender SmartScreen` dialog may appear.
In this case, you have to click on `More info` and then `Run anyway`
in order to continue with the installation.

> SciPages is a secure application, but does not have a digital certificate due to the high costs.
> The downloaded installer can still be verified using the provided SHA256 checksum.

![Windows Defender SmartScreen](/img/download/windows-protected-your-pc.png)

## Linux Installation Instructions

// TODO

## macOS Installation Instructions

> As with the Windows installer, the macOS application is also not signed due to costs.
> To run it, you must force the `Anywhere` option in Gatekeeper.
> You can see how to do this [here](https://apple.stackexchange.com/a/294016)
> and [here](https://apple.stackexchange.com/a/412436).
> The downloaded file can still be verified using the provided SHA256 checksum.

## Verify Download

You can *verify your download* to ensure its integrity.
Run one of these commands (depending on your operating system) in your terminal in the directory
where the executable file was downloaded to verify the SHA256 checksum:

For Windows:
```bash
# From CMD:
CertUtil -hashfile scipages-0.0.1.exe SHA256
# From PowerShell:
Get-FileHash scipages-0.0.1.exe -Algorithm SHA256
```

For Linux:
```bash
sha256sum scipages-0.0.1.deb
```

For macOS:

```bash
shasum -a 256 scipages-0.0.1.dmg
```
