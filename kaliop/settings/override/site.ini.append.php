<?php /* #?ini charset="utf-8"?

[ExtensionSettings]
ActiveExtensions[]
ActiveExtensions[]=kalioputils2
ActiveExtensions[]=kezaccessibility
ActiveExtensions[]=ezjscore
ActiveExtensions[]=ezgmaplocation
ActiveExtensions[]=ezxmlinstaller
ActiveExtensions[]=ezfind
ActiveExtensions[]=owezflow
ActiveExtensions[]=ezflow
ActiveExtensions[]=kesi
ActiveExtensions[]=ezwt
ActiveExtensions[]=ezwebin
#ActiveExtensions[]=ezie
ActiveExtensions[]=ezoe
ActiveExtensions[]=ezodf
ActiveExtensions[]=fezmetadata

ExtensionOrdering=enabled

[DatabaseSettings]
DatabaseImplementation=ezmysqli
Server=mysql.kaliop.loc
Port=
User=<mysql_user>
Password=<mysql_pwd>
Database=<mysql_db>
Charset=
Socket=disabled

[Session]
SessionNameHandler=custom

[SiteSettings]
DefaultAccess=www
SiteList[]
SiteList[]=www
SiteList[]=site_admin
RootNodeDepth=1

[UserSettings]
LogoutRedirect=/

[SiteAccessSettings]
ForceVirtualHost=true
CheckValidity=false
AvailableSiteAccessList[]
AvailableSiteAccessList[]=www
AvailableSiteAccessList[]=site_admin
RelatedSiteAccessList[]=www
RelatedSiteAccessList[]=site_admin
MatchOrder=host
HostMatchType=regexp
HostMatchRegexp=([^.]*)\.(([^.]*)\.){2}php(53)?.loc
HostMatchRegexpItem=1
CheckValidity=false
DebugAccess=enabled


[DesignSettings]
DesignLocationCache=enabled

[RegionalSettings]
TranslationSA[]
TranslationSA[www]=Fre

[FileSettings]
VarDir=var/kaliop

[MailSettings]
#Transport=kaliop
Transport=smtp
#KaliopRealTransport=smtp
#KaliopTransportReceiver=<mon-mail>
TransportServer=smtp.kaliop.com
TransportUser=
TransportPassword=
AdminEmail=<mon-mail>
EmailSender=noreply@kaliop.com
OutputCharset=utf-8
#ContentType=text/html


[EmbedViewModeSettings]
AvailableViewModes[]
AvailableViewModes[]=embed
AvailableViewModes[]=embed-inline
InlineViewModes[]
InlineViewModes[]=embed-inline


[TemplateSettings]
TemplateCache=enabled
TemplateCompile=enabled
NodeTreeCaching=enabled
Debug=disabled
ShowUsedTemplates=enabled


[ContentSettings]
ViewCaching=enabled

[SearchSettings]
DelayedIndexing=enabled

[DebugSettings]
Debug=inline
DebugOutput=enabled
DebugRedirection=disabled
DisplayDebugWarnings=disabled
DebugToolbar=disabled


[HTTPHeaderSettings]
CustomHeader=enabled
Cache-Control[]
Cache-Control[/]=
#Cache-Control[/]=max-age=2592000
Pragma[]
Pragma[/]=
Expires[]
Expires[/]=2592000


*/ 
