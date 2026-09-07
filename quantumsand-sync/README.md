# Quantum Sand Sync

A RubyGem for decentralised peer-to-peer git repo sync for Quantum Sand grains and associated deps.

```
cd quantumsand-sync
gem build quantumsand_sync.gemspec
```

```
WARNING:  no homepage specified
WARNING:  See https://guides.rubygems.org/specification-reference/ for help
  Successfully built RubyGem
  Name: quantumsand_sync
  Version: 0.0.0
  File: quantumsand_sync-0.0.0.gem
```

```
gem install ./quantumsand_sync-0.0.0.gem
```

```
Successfully installed quantumsand_sync-0.0.0
Parsing documentation for quantumsand_sync-0.0.0
Done installing documentation for quantumsand_sync after 0 seconds
1 gem installed
```

```
% irb
3.3.0 :002 > require "quantumsand_sync"
 => true 
3.3.0 :003 > QuantumsandSync.p2p_ssh_git_sync
QuantumsandSync.p2p_ssh_git_sync
```
