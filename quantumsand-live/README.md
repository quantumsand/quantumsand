# Quantum Sand Live

Quantum Sand Live builder RubyGem.

```
cd quantumsand-live
gem build quantumsand_live.gemspec
```

```
WARNING:  no homepage specified
WARNING:  See https://guides.rubygems.org/specification-reference/ for help
  Successfully built RubyGem
  Name: quantumsand_live
  Version: 0.0.0
  File: quantumsand_live-0.0.0.gem
```

```
gem install ./quantumsand_live-0.0.0.gem
```

```
Successfully installed quantumsand_live-0.0.0
Parsing documentation for quantumsand_live-0.0.0
Done installing documentation for quantumsand_live after 0 seconds
1 gem installed
```

```
% irb
3.3.0 :002 > require "quantumsand_live"
 => true 
3.3.0 :003 > QuantumsandLive.hi
Hello world! QuantumsandLive!!
```

 ```
3.3.0 :002 > QuantumsandLive::FormatStick.hi
Hello world! QuantumsandLive!! FormatStick
 => nil 
```

With `system("sudo echo *")`:

```
3.3.0 :002 > QuantumsandLive::FormatStick.hi
Hello world! QuantumsandLive!! FormatStick
Password:
README.md lib quantumsand_live-0.0.0.gem quantumsand_live.gemspec
 => true 
```
