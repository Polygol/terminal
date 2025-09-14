const LANG_EN_TERMINAL = {
    WELCOME_TITLE: "Gurasuraisu Terminal",
    WELCOME_L1: "Commands executed in the Terminal may NOT be reversible!",
    WELCOME_L2: "If someone told you to copy/paste something here, there’s an 200/10 chance you’re being scammed. Pasting anything in here could give attackers access to your Gurasuraisu data.",
    WELCOME_L3: "Type 'help' to see a list of commands.",
    WELCOME_L4: "Some commands are privileged and may require confirmation in the parent Gurasuraisu window.",
    UNKNOWN_COMMAND: "Unknown command: {command}. Type 'help' for a list.",
    PRIVILEGED_WARNING: "WARNING: The \"{command}\" command is privileged and can be dangerous.",
    UNLOCK_PROMPT: "To prevent accidental use, please solve the following challenge:",
    UNLOCK_CHALLENGE: "CHALLENGE: {challenge}",
    UNLOCK_INSTRUCTION: "Unlock by typing: unlock <your_answer>",
    UNLOCK_SUCCESS: "Privileged commands unlocked for 10 minutes.",
    UNLOCK_EXPIRED: "Access to privileged commands has expired.",
    UNLOCK_NO_CHALLENGE: "No active challenge. Try a privileged command first.",
    UNLOCK_FAILED: "Try again. The challenge has been reset.",
    USAGE_ERROR: "Usage: {usage}"
};

const LANG_JP_TERMINAL = {
    WELCOME_TITLE: "ぐら すらいす ターミナル",
    WELCOME_L1: "ターミナルで実行されたコマンドは元に戻せない場合があります！",
    WELCOME_L2: "誰かにここに何かをコピー＆ペーストするように言われた場合、詐欺に遭っている可能性が非常に高いです。ここに何かを貼り付けると、攻撃者があなたのぐら すらいすデータにアクセスできる可能性があります。",
    WELCOME_L3: "コマンドのリストを表示するには、「help」と入力してください。",
    WELCOME_L4: "一部のコマンドは特権が必要であり、親のぐら すらいすウィンドウでの確認が必要な場合があります。",
    UNKNOWN_COMMAND: "不明なコマンド：{command}。「help」と入力してリストを表示してください。",
    PRIVILEGED_WARNING: "警告：「{command}」コマンドは特権があり、危険な場合があります。",
    UNLOCK_PROMPT: "偶発的な使用を防ぐため、次のチャレンジを解決してください：",
    UNLOCK_CHALLENGE: "チャレンジ：{challenge}",
    UNLOCK_INSTRUCTION: "ロックを解除するには、次のように入力します：unlock <あなたの答え>",
    UNLOCK_SUCCESS: "特権コマンドが10分間ロック解除されました。",
    UNLOCK_EXPIRED: "特権コマンドへのアクセスが期限切れになりました。",
    UNLOCK_NO_CHALLENGE: "アクティブなチャレンジはありません。まず特権コマンドを試してください。",
    UNLOCK_FAILED: "もう一度お試しください。チャレンジはリセットされました。",
    USAGE_ERROR: "使用法：{usage}"
};

const LANG_DE_TERMINAL = {
    WELCOME_TITLE: "Gurasuraisu Terminal",
    WELCOME_L1: "Im Terminal ausgeführte Befehle sind möglicherweise NICHT umkehrbar!",
    WELCOME_L2: "Wenn Ihnen jemand gesagt hat, hier etwas zu kopieren und einzufügen, besteht eine hohe Wahrscheinlichkeit, dass Sie betrogen werden. Das Einfügen von Inhalten hier könnte Angreifern Zugriff auf Ihre Gurasuraisu-Daten geben.",
    WELCOME_L3: "Geben Sie 'help' ein, um eine Liste der Befehle anzuzeigen.",
    WELCOME_L4: "Einige Befehle sind privilegiert und erfordern möglicherweise eine Bestätigung im übergeordneten Gurasuraisu-Fenster.",
    UNKNOWN_COMMAND: "Unbekannter Befehl: {command}. Geben Sie 'help' für eine Liste ein.",
    PRIVILEGED_WARNING: "WARNUNG: Der Befehl \"{command}\" ist privilegiert und kann gefährlich sein.",
    UNLOCK_PROMPT: "Um eine versehentliche Verwendung zu verhindern, lösen Sie bitte die folgende Aufgabe:",
    UNLOCK_CHALLENGE: "HERAUSFORDERUNG: {challenge}",
    UNLOCK_INSTRUCTION: "Entsperren durch Eingabe von: unlock <Ihre_Antwort>",
    UNLOCK_SUCCESS: "Privilegierte Befehle für 10 Minuten freigeschaltet.",
    UNLOCK_EXPIRED: "Der Zugriff auf privilegierte Befehle ist abgelaufen.",
    UNLOCK_NO_CHALLENGE: "Keine aktive Herausforderung. Versuchen Sie zuerst einen privilegierten Befehl.",
    UNLOCK_FAILED: "Versuchen Sie es erneut. Die Herausforderung wurde zurückgesetzt.",
    USAGE_ERROR: "Verwendung: {usage}"
};

const LANG_ES_TERMINAL = {
    WELCOME_TITLE: "Terminal de Gurasuraisu",
    WELCOME_L1: "¡Los comandos ejecutados en la Terminal pueden NO ser reversibles!",
    WELCOME_L2: "Si alguien te dijo que copiaras y pegaras algo aquí, hay una alta probabilidad de que te estén estafando. Pegar cualquier cosa aquí podría dar a los atacantes acceso a tus datos de Gurasuraisu.",
    WELCOME_L3: "Escribe 'help' para ver una lista de comandos.",
    WELCOME_L4: "Algunos comandos son privilegiados y pueden requerir confirmación en la ventana principal de Gurasuraisu.",
    UNKNOWN_COMMAND: "Comando desconocido: {command}. Escribe 'help' para ver una lista.",
    PRIVILEGED_WARNING: "ADVERTENCIA: El comando \"{command}\" es privilegiado y puede ser peligroso.",
    UNLOCK_PROMPT: "Para evitar el uso accidental, por favor resuelve el siguiente desafío:",
    UNLOCK_CHALLENGE: "DESAFÍO: {challenge}",
    UNLOCK_INSTRUCTION: "Desbloquea escribiendo: unlock <tu_respuesta>",
    UNLOCK_SUCCESS: "Comandos privilegiados desbloqueados por 10 minutos.",
    UNLOCK_EXPIRED: "El acceso a los comandos privilegiados ha expirado.",
    UNLOCK_NO_CHALLENGE: "No hay desafío activo. Intenta primero un comando privilegiado.",
    UNLOCK_FAILED: "Inténtalo de nuevo. El desafío se ha reiniciado.",
    USAGE_ERROR: "Uso: {usage}"
};

const LANG_KO_TERMINAL = {
    WELCOME_TITLE: "구라수라이수 터미널",
    WELCOME_L1: "터미널에서 실행된 명령어는 되돌릴 수 없을 수 있습니다!",
    WELCOME_L2: "누군가 여기에 무언가를 복사하여 붙여넣으라고 했다면 사기일 가능성이 매우 높습니다. 여기에 무언가를 붙여넣으면 공격자가 귀하의 구라수라이수 데이터에 접근할 수 있습니다.",
    WELCOME_L3: "명령어 목록을 보려면 'help'를 입력하세요.",
    WELCOME_L4: "일부 명령어는 권한이 필요하며 상위 구라수라이수 창에서 확인이 필요할 수 있습니다.",
    UNKNOWN_COMMAND: "알 수 없는 명령어: {command}. 목록을 보려면 'help'를 입력하세요.",
    PRIVILEGED_WARNING: "경고: \"{command}\" 명령어는 권한이 있으며 위험할 수 있습니다.",
    UNLOCK_PROMPT: "실수로 사용하는 것을 방지하기 위해 다음 챌린지를 해결해주세요:",
    UNLOCK_CHALLENGE: "챌린지: {challenge}",
    UNLOCK_INSTRUCTION: "잠금 해제 방법: unlock <당신의_답>",
    UNLOCK_SUCCESS: "10분 동안 특권 명령어가 잠금 해제되었습니다.",
    UNLOCK_EXPIRED: "특권 명령어에 대한 접근이 만료되었습니다.",
    UNLOCK_NO_CHALLENGE: "활성 챌린지가 없습니다. 먼저 특권 명령어를 시도해보세요.",
    UNLOCK_FAILED: "다시 시도하세요. 챌린지가 초기화되었습니다.",
    USAGE_ERROR: "사용법: {usage}"
};

const LANG_ZH_TERMINAL = {
    WELCOME_TITLE: "Gurasuraisu 终端",
    WELCOME_L1: "在终端中执行的命令可能无法撤销！",
    WELCOME_L2: "如果有人让你在这里复制粘贴某些内容，那么你有很大概率被骗了。在此处粘贴任何内容都可能让攻击者访问你的Gurasuraisu数据。",
    WELCOME_L3: "输入 'help' 查看命令列表。",
    WELCOME_L4: "某些命令是特权命令，可能需要在父Gurasuraisu窗口中进行确认。",
    UNKNOWN_COMMAND: "未知命令：{command}。输入 'help' 查看列表。",
    PRIVILEGED_WARNING: "警告：“{command}”是特权命令，可能很危险。",
    UNLOCK_PROMPT: "为防止意外使用，请解决以下挑战：",
    UNLOCK_CHALLENGE: "挑战：{challenge}",
    UNLOCK_INSTRUCTION: "通过输入解锁：unlock <你的答案>",
    UNLOCK_SUCCESS: "特权命令已解锁10分钟。",
    UNLOCK_EXPIRED: "特权命令的访问权限已过期。",
    UNLOCK_NO_CHALLENGE: "没有活动的挑战。请先尝试一个特权命令。",
    UNLOCK_FAILED: "请重试。挑战已重置。",
    USAGE_ERROR: "用法：{usage}"
};
